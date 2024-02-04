import random


def generate_vitals_data_ytrain(filepath, num_samples):
    file1 = open(filepath, "w+")

    for i in range(num_samples + 1):
        data_point = str(format(random.uniform(1500, 20000), ".2f"))
        file1.write(data_point)
        if i != num_samples:
            file1.write("\n")
    file1.close()


def generate_vitals_data_Xtrain(filepath, num_samples):
    file1 = open(filepath, "w+")

    for i in range(num_samples + 1):
        sleep_hours = random.uniform(7, 9)
        spo2_levels = random.uniform(95, 100)
        heart_rates = random.uniform(60, 100)
        temperatures = random.uniform(97.8, 99.1)
        breathing_rates = random.uniform(12, 20)
        vo2_max_scores = random.uniform(30, 40)
        data_point = str(sleep_hours) + "," + str(spo2_levels) + "," + str(heart_rates) + "," + str(temperatures) + "," + str(breathing_rates) + "," + str(vo2_max_scores)
        file1.write(data_point)
        if i != num_samples:
            file1.write("\n")
    file1.close()


def generate_X_and_y(filepath, tort, num_samples):
    generate_vitals_data_Xtrain(filepath + "/X_" + tort + ".csv", num_samples)
    generate_vitals_data_ytrain(filepath + "/y_" + tort + ".csv", num_samples)


generate_X_and_y("Vitals/train", "train", 20)
generate_X_and_y("Vitals/test", "test", 10)
