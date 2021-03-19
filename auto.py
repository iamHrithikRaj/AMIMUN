import numpy as np
import pandas as pd
import regex as re


data = pd.read_excel("FACULTY OC AMIMUN'21.xlsx")
print(data)

i = 1
f_obj = open('data.txt','w')
for full_name in data["name"]:
    if(full_name):
        name, position = full_name.split(',', 1)
        code = '''
            <tr>
            <th scope="row">'''+str(i)+'''</th>
            <td>'''+name+'''</td>
            <td>'''+position+'''</td>
            </tr>
        '''
        f_obj.write(code)
        i += 1
f_obj.close()

