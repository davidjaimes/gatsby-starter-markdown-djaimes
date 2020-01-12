---
title: Data Science Environment Setup
sidebar: /
showTitle: True
---
Are you setting up a brand new Apple computer for the first time or are you have you forgotten the last process you took to get everything up and running? No worries. I have you covered and will lay out the steps to get up and running in no time. This is the general route I take whenever I execute a clean install on my Mac computer.

Here are the tools we will be setting up:
* [Xcode](https://developer.apple.com/xcode/): Apple Developer Tools.
* [Oh My Zsh](https://ohmyz.sh/): A delightful, open source, community-driven framework for managing your Zsh configuration.
* [Homebrew](https://brew.sh/): The missing package manager for macOS.
* [Miniconda](https://docs.conda.io/en/latest/miniconda.html): A free minimal installer for conda.
and integrate systems more effectively.
* [MacTeX](https://tug.org/mactex/): A document preparation system.
* [Atom](https://atom.io/): An open-source text editor for the 21st century.

# Xcode
The first thing to install is Apple's command line tools.
1. Launch the Terminal application found in your `Applications/Utilities` directory.
2. Enter this install command:
```bash
xcode-select --install
```
3. A pop up window appears and press the Install button. After the installation is done you can enter the `gcc -version` command and something similar to this should print out:
```
Configured with: --prefix=/Library/Developer/CommandLineTools/usr --with-gxx-include-dir=/Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/usr/include/c++/4.2.1
Apple clang version 11.0.0 (clang-1100.0.33.8)
Target: x86_64-apple-darwin19.2.0
Thread model: posix
InstalledDir: /Library/Developer/CommandLineTools/usr/bin
```

# Oh My Zsh
Install oh-my-zsh now and use this link to [change themes](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes):
```bash
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

# Homebrew
Install Homebrew now:
```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

# Miniconda
1. Download the latest bash file from the [Miniconda](https://docs.conda.io/en/latest/miniconda.html) page and install with the following command:
```bash
bash Miniconda3-latest-MacOSX-x86_64.sh
```
2. Update conda and initialize zsh environment for macOS Catalina users:
```bash
conda update conda
conda init zsh
```
3. Install all Python libraries at once (NumPy and SciPy will also be installed):
```bash
conda install matplotlib pandas astropy notebook scikit-learn
```
