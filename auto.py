import numpy as np
import pandas as pd

data = pd.read_excel("AMIMUN'21 OC .xlsx")
print(data)
i = 1
f_obj = open('data.txt','w')
for name, position, course in zip(data["IP"], data["Position"], data["Course"]):
    code = '''
        <tr>
        <th scope="row">'''+str(i)+'''</th>
        <td>'''+name+'''</td>
        <td>'''+position+'''</td>
        <td>'''+course+'''</td>
        </tr>
    '''
    f_obj.write(code)
    i += 1

f_obj.close()

