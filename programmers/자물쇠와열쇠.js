function solution(key, lock) {
    const k_len = key.length;
    const l_len = lock.length;
    const m_len = l_len + k_len * 2 - 2;
    const maps = Array.from(Array(m_len), () => new Array(m_len).fill(null));

    for (let i = k_len - 1; i <= m_len - k_len; i++) {
        for (let j = k_len - 1; j <= m_len - k_len; j++) {
            maps[i][j] = lock[i - k_len + 1][j - k_len + 1];
        }
    }

    for (let r = 0; r < 4; r++) {
        key = rotate(key);
        for (let i = 0; i < l_len + k_len - 1; i++) {
            for (let j = 0; j < l_len + k_len - 1; j++) {
                const newMap = maps.map((v) => v.slice());

                for (let k = 0; k < k_len; k++) {
                    for (let l = 0; l < k_len; l++) {
                        if (newMap[i + k][j + l] === 1 && key[k][l] === 1) {
                            newMap[i + k][j + l] = 2;
                        } else if (newMap[i + k][j + l] === 1 && key[k][l] === 0) {
                            newMap[i + k][j + l] = 1;
                        } else if (newMap[i + k][j + l] === 0 && key[k][l] === 1) {
                            newMap[i + k][j + l] = 1;
                        } else {
                            newMap[i + k][j + l] = 0;
                        }
                    }
                }
                if (checkAnswer(newMap, k_len, m_len)) return true;
            }
        }
    }
    return false;
}

function rotate(key) {
    const m = key.length;
    const newKey = Array.from(Array(m), () => Array(m).fill(null));
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < m; ++j) {
            newKey[i][j] = key[m - 1 - j][i];
        }
    }
    return newKey;
}

function checkAnswer(newMap, k_len, m_len) {
    for (let i = k_len - 1; i <= m_len - k_len; i++) {
        for (let j = k_len - 1; j <= m_len - k_len; j++) {
          if (newMap[i][j] !== 1) {
            return false;
          }
        }
    }
    return true;
}
let key = [[0, 0, 0], [1, 0, 0], [0, 1, 1]];
let lock = [[1, 1, 1], [1, 1, 0], [1, 0, 1]];
console.log(solution(key, lock));