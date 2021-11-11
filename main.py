import os

f_obj = open("./gallery-data.txt", "w")

for i in os.listdir(os.getcwd() + "/gallery-imgs"):
    data =  '''<a
            href="./gallery-imgs/'''+ i  + '''"
            data-lightbox="models"
            data-title="Caption1"
          >
            <img
              src="./gallery-imgs/'''+i+'''"
            />
          </a>'''

    f_obj.write(data)
    f_obj.write("\n")