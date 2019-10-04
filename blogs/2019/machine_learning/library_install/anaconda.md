# Anaconda3 Installation

## Installation

```
wget https://repo.anaconda.com/archive/Anaconda3-2019.07-Linux-x86_64.sh
bash Anaconda3-2019.07-Linux-x86_64.sh # always select `yes`
source ~/.bashrc
conda update conda
conda update anaconda
```
## Usage

### Create a new environment

```
conda create -n <Name> python=<Version>
```

Use `conda env list` to get the list of environments

### Activate envir

```
conda activate <Name>
```

### Exit

```
conda deactivate
```

