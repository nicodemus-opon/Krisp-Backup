import numpy as np

import matplotlib
name="nicopon"
password="11060"
print(len(name))
if len(name)%2 ==0:
    name+=name[0]
print(name)
x=0
name_array=[]
for z in name:
    if name.index(name[x])<(len(name)-1):
        try:
            name_array.append(int(name[x]>name[x+1]))
        except Exception as p:
            pass
    x+=1
print(name_array)
array_x=np.array(name_array)
import matplotlib.pyplot as plt
plt.imshow([array_x,array_x]) #Needs to be in row,col order
plt.savefig("filename.png")

from PIL import Image
im = Image.fromarray(np.array([array_x,array_x]))
im.save("your_file.jpeg")
