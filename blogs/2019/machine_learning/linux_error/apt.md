# Unmet dependencies error

## Problems

```
Do you want to continue? [Y/n] Y                                                                                        (Reading database ... 244019 files and directories currently installed.)                                                Preparing to unpack .../nvidia-cuda-dev_7.5.18-0ubuntu1_amd64.deb ...                                                   Unpacking nvidia-cuda-dev (7.5.18-0ubuntu1) ...                                                                         dpkg: error processing archive /var/cache/apt/archives/nvidia-cuda-dev_7.5.18-0ubuntu1_amd64.deb (--unpack):             trying to overwrite '/usr/lib/x86_64-linux-gnu/stubs/libcublas.so', which is also in package libcublas-dev 10.2.1.243-1dpkg-deb: error: subprocess paste was killed by signal (Broken pipe)                                                     nvidia-cuda-toolkit : Depends: nvidia-cuda-dev (= 7.5.18-0ubuntu1) but it is not installed                             E: Unmet dependencies. Try using -f.  
```

## Solve

`sudo dpkg -i --force-overwrite <filename>`


```
sudo dpkg -i --force-overwrite /var/cache/apt/archives/nvidia-cuda-dev_7.5.18-0ubuntu1_amd64.deb
sudo apt-get -f install
```