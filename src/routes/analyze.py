# import pymysql
# import random
# conn = pymysql.connect(host='localhost', port=3306,
#                        user='root', password='1234', db='info',
#                        charset='utf8')
# curs = conn.cursor()

import json
import sys

wTem = json.loads(sys.argv[1])
wHum = json.loads(sys.argv[2])
nTem = json.loads(sys.argv[3])
nHum = json.loads(sys.argv[4])
nLight = json.loads(sys.argv[5])

wLight = 50


result = nTem - wTem
if result > 0:
    print('-'+str(result))
elif result < 0:
    result = -result
    print('+'+str(result))
else:
    print("0")

result = nHum - wHum
if result > 0:
    print('-'+str(result))
elif result < 0:
    result = -result
    print('+'+str(result))
else:
    print("0")

result = nLight - wLight
if result > 0:
    print('-'+str(result))
elif result < 0:
    result = -result
    print('+'+str(result))
else:
    print("0")