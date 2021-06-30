import sys

N = int(sys.stdin.readline())
start = N
N_10 = N // 10
N_01 = N % 10

count = 0
while True:
    N = N_01 * 10 + ((N_10 + N_01) % 10)
    N_10 = N // 10
    N_01 = N % 10
    count += 1
    if count!=0 and N == start:
        print(count)
        break;