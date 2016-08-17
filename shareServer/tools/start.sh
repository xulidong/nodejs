#rm -rf /home/g54/shareServer/data
#rm -rf /home/g54/shareServer/logs
#ln -s /home/g54/gamedata/data /home/g54/shareServer/data
#ln -s /home/g54/gamedata/logs /home/g54/shareServer/logs
nohup node /home/g54/shareServer/app.js >/home/g54/shareServer/logs/nohup.log 2>&1 &