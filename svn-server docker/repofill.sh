#!/bin/bash

mkdir SP
cd SP
svn checkout --force --no-auth-cache http://localhost/svn/SampleProject/ --username user --password password
cd SampleProject
touch 1.txt
echo "this is simple text file" > 1.txt
mkdir sample
cd sample
touch 2.txt
echo "this is simple text file in folder" > 2.txt
cd ..
svn add * --force
svn commit --message "test" --no-auth-cache --username user --password password