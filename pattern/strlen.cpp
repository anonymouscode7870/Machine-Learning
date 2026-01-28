// C++ program to print maximum value of
// unsigned int.
#include <iostream>

using namespace std;

int main()
{
    unsigned int max;
    max = 0;
    max = ~max;

    cout << "Max value possible : " << max;

    return 0;
}