#include <iostream>
#include <vector>
using namespace std;

void f(vector<int>& dp, int n) {
    if (n == 0) return;

    dp[0] = 0;
    dp[1] = 1;

    for (int i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
}

int main() {
    int n;
    cin >> n;

    vector<int> dp(n + 1, -1);
    f(dp, n);

    cout << dp[n];
    return 0;
}
