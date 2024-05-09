mkdir -p projects
cd projects || exit
mkdir -p my_project
cd my_project || exit
mkdir -p directory1 directory2 directory3
cd directory1 || exit
mkdir -p subdirectory1
cd ../
cd directory2 || exit
echo 'Hello from JS' > hello.txt
cd ../
cd directory3 || exit
mkdir -p subdirectory2