# cuDNN Installation on Linux

## What's cuDNN

> The NVIDIA CUDA Deep Neural Network library (cuDNN) is a GPU-accelerated library of primitives for deep ? neural networks. cuDNN provides highly tuned implementations for standard routines such as forward and backward convolution, pooling, normalization, and activation layers. cuDNN is part of the NVIDIA Deep Learning SDK.
> Deep learning researchers and framework developers worldwide rely on cuDNN for high-performance GPU acceleration. It allows them to focus on training neural networks and developing software applications rather than spending time on low-level GPU performance tuning. cuDNN accelerates widely used deep learning frameworks, including Caffe, Caffe2, TensorFlow, Theano, Torch, PyTorch, MXNet, and Microsoft Cognitive Toolkit. cuDNN is freely available to members of the NVIDIA Developer Program.

## Download

Go to NVIDIA offical [cuDNN Download](https://developer.nvidia.com/rdp/cudnn-download) site. And we need to register or login to obtain the access to download.

Let's take `CUDA 10.1` and `Ubuntu 16.04` combination as example, We need

- cuDNN Runtime Library for Ubuntu16.04 [Deb]
- cuDNN Developer Library for Ubuntu16.04 [Deb]
- cuDNN Code Samples and User Guide Library for Ubuntu16.04 [Deb]

## Install

```sh
sudo dpkg -i <runtime>.deb
sudo dpkg -i <developer>.deb
sudo dpkg -i <guide>.deb
```

## Reference

[cuDNN Installation Guide](https://docs.nvidia.com/deeplearning/sdk/cudnn-install/index.html)
