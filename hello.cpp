#include <iostream>
using namespace std;

int gcd(int a, int b) {
    while (b != 0) {
        int rem = a % b;
        a = b;
        b = rem;
    }
    return a;
}

int main() {
    int a = 12, b = 18;
    cout << "GCD = " << gcd(a, b) << endl;
}
