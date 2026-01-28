#include <iostream>
using namespace std;

int main() {
    int n = 4; // number of rows for the top half (including middle)
    
    // Top half of diamond
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n - i; j++)
            cout << " ";
        for (int j = 1; j <= 2 * i - 1; j++)
            cout << "*";
        cout << endl;
    }
    // Bottom half of diamond
    for (int i = n - 1; i >= 1; i--) { // i = 3 for inside loop
        for (int j = 1; j <= n - i; j++)
            cout << " ";
        for (int j = 1; j <= 2 * i - 1; j++)
            cout << "*";
        cout << endl;
    }
}
