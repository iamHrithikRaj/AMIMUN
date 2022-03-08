import pandas as pd
import numpy as np
 
def is_number(n):
    try:
        float(n)   # Type-casting the string to `float`.
                   # If string is not a valid `float`, 
                   # it'll raise `ValueError` exception
    except ValueError:
        return False
    return True

f_obj = open('data.txt', 'w')

tabs = pd.ExcelFile("/Users/hrithikraj/Documents/Projects/AMIMUN/COUNTRY MATRIX ROUND 2 (1) 2.xlsx").sheet_names 


# for tab in tabs:
#     f_obj.write(tab + '\n')
#     data = pd.read_excel("/Users/hrithikraj/Documents/Projects/AMIMUN/COUNTRY MATRIX ROUND 2 (1) 2.xlsx", tab)
#     for value in data:
#         for list_value in data[value]:
#             if(not is_number(list_value)):
#                 f_obj.write('''<li class="list">'''+list_value+'''</li>''')
#                 f_obj.write('\n')
#     f_obj.write('\n\n')



for tab in tabs:
    f_obj.write(tab + '\n')
    data = pd.read_excel("/Users/hrithikraj/Documents/Projects/AMIMUN/COUNTRY MATRIX ROUND 2 (1) 2.xlsx", tab)
    for value in data:
        # if(str(data[value])):
        for list_value in data[value]:
            if(not is_number(list_value)):
                f_obj.write('''<asp:ListItem Text="'''+list_value+'''" Value="'''+list_value+'''" />''')
                f_obj.write('\n')
    f_obj.write('\n\n')
    # f_obj.write()


