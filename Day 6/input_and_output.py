# f = open("file.txt", "r")
# data = f.read()
# print(data)
# f.close()   

# f = open("file.txt", "r")
# data = f.readlines() # Read all lines into a list
# print(data)
# f.close()  

# f = open("file.txt", "r")
# data = f.readline() # Read all lines into a list
# print(data)
# f.close()


# write mode
# f = open("file.txt", "w")
# f.write("Hello World\n This is a new file.\n")
# f.close()

# using with keyword we don't need to close the file manually
# with open("file.txt", "r") as f:
#     data = f.read()
#     print(data)

# delete a file
# import os
# if os.path.exists("file.txt"):
#     os.remove("file.txt")
# else:
#     print("The file does not exist")

