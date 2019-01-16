echo "Restarting bitcoin insight api"
echo "killing all bitcoin processes..."
#kill processes
killall -s KILL bitcoind
killall -s KILL bitcored

sleep 2

cd /mnt/volume_sgp1_04/.bitcoin

echo "working directory ${PWD}"
#start 
nohup bitcored &