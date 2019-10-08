# Caffe Installtion Using Docker

## Install Docker

```sh
# uninstall old verison
$ sudo apt-get remove docker docker-engine docker.io containerd runc

# install packages
$ sudo apt-get update
$ sudo apt-get install apt-transport-https ca-certificates curl gnupg-agent software-properties-common

# add Docker's offical GPG key
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

# install Docker Engine - Community
$ sudo apt-get update
$ sudo apt-get install docker-ce docker-ce-cli containerd.io

# test
# This command downloads a test image and runs it in a container. When the container runs, it prints an informational message and exits
$ sudo docker run hello-world
```

You can also see [Get Docker Engine - Community for Ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/)

## Install nvidia-docker

NVIDIA driver should be installed!

```sh
# Add the package repositories
$ curl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | sudo apt-key add -
$ curl -s -L https://nvidia.github.io/nvidia-docker/$(. /etc/os-release;echo $ID$VERSION_ID)/nvidia-docker.list | sudo tee /etc/apt/sources.list.d/nvidia-docker.list

# install nvidia-decker
$ sudo apt-get update
$ sudo apt-get install -y nvidia-container-toolkit
$ sudo systemctl restart docker

# test
# nvidia-smi with the latest official CUDA image
$ sudo docker run --gpus all nvidia/cuda:9.0-base nvidia-smi
```

You also can see [NVIDIA Container Toolkit](https://github.com/NVIDIA/nvidia-docker)

## Docker Basic Usage

### Get Docker images

You can get over 2 million avaliable docker images from [Docker Hub](https://hub.docker.com/search/?q=&type=image) using

```sh
# Pull an image or a repository from a registry
$ sudo docker pull [OPTIONS] NAME[:TAG|@DIGEST]
```

#### Get caffe docker image

See [Docker Hub for Caffe](https://hub.docker.com/r/bvlc/caffe/tags)

```sh
# caffe gpu version
$ sudo docker pull bvlc/caffe:gpu

# caffe cpu version
$ sudo docker pull bvlc/caffe:cpu
```

### Run Docker

```sh
# Run a command in a new container
$ sudo docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
```

Options:

- `--ti`: Terminal + Interactive
- `--rm`: remove container when exit
- `--net`: network
- `-v`: file system mount
- `--gpus`: use gpu in docker (nvidia gpu)

#### run caffe-gpu docker

```sh
# run caffe-gpu docker
$ sudo docker run --gpus all --net host -ti -v ~/models/DORN:/DORN bvlc/caffe:gpu
```

### Docker image

```sh
# images list
$ sudo docker image list

# remove docker image
$ sudo docker image rm [IMAGE ID]

# container list
$ sudo docker ps -a

# remove running container
$ sudo docker rm [CONTAINER ID]

# exit docker
$ ctrl-D
```

## Build Caffe

The pulled caffe docker uses CUDA8.0. If we use other version of CUDA, we need to rebuild caffe. We need to change two places for successful build.

### Prepare

```sh
# enter $(CAFFE_ROOT)
$ cd /opt/caffe

# backup Makefile.config
$ cp Makefile.config.example Makefile.config

# install vim
$ apt-get update
$ apt-get install vim
```

### Edit Makefile.config and Makefile

Beacuse of the environment variable error of `hdf5`, we need to change two files.

In **Makefile.config**:

change

```makefile
INCLUDE_DIRS := $(PYTHON_INCLUDE) /usr/local/include
```

to

```makefile
INCLUDE_DIRS := $(PYTHON_INCLUDE) /usr/local/include /usr/include/hdf5/serial/
```

In **Makefile**:

change

```makefile
LIBRARIES += glog gflags protobuf boost_system boost_filesystem m hdf5_hl hdf5
```

to

```makefile
LIBRARIES += glog gflags protobuf boost_system boost_filesystem m hdf5_serial_hl hdf5_serial
```

## CUDA Version issue

In **Makefile.config**, edit cuda architecture part according to the comment:

```Makefile
# CUDA architecture setting: going with all of them.
# For CUDA < 6.0, comment the *_50 through *_61 lines for compatibility.
# For CUDA < 8.0, comment the *_60 and *_61 lines for compatibility.
CUDA_ARCH := -gencode arch=compute_20,code=sm_20 \
             -gencode arch=compute_20,code=sm_21 \
             -gencode arch=compute_30,code=sm_30 \
             -gencode arch=compute_35,code=sm_35 \
             -gencode arch=compute_50,code=sm_50 \
             -gencode arch=compute_52,code=sm_52 \
             -gencode arch=compute_60,code=sm_60 \
             -gencode arch=compute_61,code=sm_61 \
             -gencode arch=compute_61,code=compute_61  
```

## Build

```sh
# rebuild caffe
$ cd /opt/caffe
$ make -j4
```

## Add cuDNN usage to Caffe

null

## Test

```sh
# test caffe by training le_net on mnist
$ cd /opt/caffe

# get mnist data
$ ./data/mnist/get_mnist.sh

# prepare data
$ ./examples/mnist/create_mnist.sh

# train le_net
$ ./build/tools/caffe train --solver=examples/mnist/lenet_solver.prototxt
```

## Save Docker image

Docker won't save our changes in the running container. We need to save them by ourself.

```sh
# exit current container using `exit`
root@[CONTAINER ID]$ exit

# get the comtainer id
$ sudo docker ps -a

# using the container id to commit our changes
$ sudo docker commit [CONTAINER ID] [NEW NAME]

# use our new image (see `Run Docker` part)
$ sudo docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
```
