#!/bin/bash

git clone --bare https://github.com/nuts4nuts4nuts/dotfiles.git $HOME/dotfiles.git
alias conf="git --git-dir=%HOME/dotfiles.git/ --work-tree=$HOME"
conf config --local status.showUntrackedFiles no
conf checkout
