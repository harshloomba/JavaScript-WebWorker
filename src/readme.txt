Dependencies:
1. Python
2. pip
3. Flask
Running Instructions 
1. Assuming pip is installed globally run: pip install flask (works from any folder)
2. Navigate to the project folder
3. Execute the command: py app.py 
4. Using Google Chrome Browser, navigate to http://your.internal.ip:5000/
5. To check the different scenarios use the following routes

Routes
1. http://your.internal.ip:5000 - serves html which contains web worker (makes call /getjson - serves json having encode and decode operations)
2. http://your.internal.ip:5000/simpleNoWorker - serves html which contains not web worker (makes call /getjson)
3. http://your.internal.ip:5000/simpleNoWorkerComplex - serves html which contains no web worker (makes 2 ajax calls to /getjson)
4. http://your.internal.ip:5000/simpleWorkerComplex - serves html which contains 2 web worker (each makes ajax calls to /getjson)
5. http://your.internal.ip:5000/hugeFile - serves html which contains no web worker (makes ajax call to /cardData - json which is 5 MB)
6. http://your.internal.ip:5000/hugeDataWorker - serves html which contains web worker (makes ajax call to /cardData)
7. http://your.internal.ip:5000/hugeDataWorker1 - serves html which contains web worker (makes ajax call to /cardSets - json which is 15MB and 
has complex document structure) 