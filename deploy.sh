
hexo g
cd output
mkdir docs
mv miniappdocs/* docs
mv docs miniappdocs
cd ..
fis3 release
rm -rf output
echo "deploy done!"