import random


def generate_ecg_data_ytrain(filepath, num_samples):
    file1 = open(filepath, "w+")
    # values = ['bradycardia', 'normal', 'tachycardia']

    for i in range(num_samples + 1):
        data_point = str(int(random.uniform(0, 3)))
        file1.write(data_point)
        if i != num_samples:
            file1.write("\n")
    file1.close()


def generate_ecg_data_Xtrain(filepath, num_samples, points):
    file1 = open(filepath, "w+")

    for i in range(num_samples + 1):
        for j in range(points):
            data_point = str(random.normalvariate(0, 1))
            if j != points - 1:
                data_point += ","
            file1.write(data_point)
        if i != num_samples:
            file1.write("\n")
    file1.close()


def generate_X_and_y(filepath, tort, num_samples):
    generate_ecg_data_Xtrain(filepath + "/X_" + tort + ".csv", num_samples, 100)
    generate_ecg_data_ytrain(filepath + "/y_" + tort + ".csv", num_samples)


generate_X_and_y("ECG/train", "train", 20)
generate_X_and_y("ECG/test", "test", 10)
