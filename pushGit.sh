#!/bin/bash
if [ "$1" == '' ]
then  
	echo "No puedes hacer un commit con un mensaje vacio"
else
	git add .
	git commit -m "$1"
	git push origin master
fi
