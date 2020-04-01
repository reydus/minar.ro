#!/usr/bin/env python3
import urllib.request

urllib.request.urlopen("https://api.mcsrvstat.us/simple/reyd.us")

try:
    fp = urllib.request.urlopen("https://api.mcsrvstat.us/simple/reyd.us")
    print(fp)
    print(fp.code)
    if fp.code != 200:
        raise Exception("Response is not 200")
    mybytes = fp.read()
    status = mybytes.decode("utf8")
    fp.close()
except:
    status = "Unretrievable"

with open("/home/bright/www/serverStatus.txt","w") as filed:
    filed.write(status)
    filed.close


