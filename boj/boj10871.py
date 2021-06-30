import sys

N,M = map(int, sys.stdin.readline().split())
arr = list(map(int, sys.stdin.readline().split()))

for i in range(N):
    if arr[i] < M:
        print(arr[i], end=" ")