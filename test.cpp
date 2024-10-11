#include <iostream>
using namespace std;

int main() {
   cout << "Hello world!" << endl;
   return 0;
}

// 声明 `_add` 和 `_multiply` 函数
extern "C" {
   int add(int a, int b);
   int multiply(int a, int b);
}

// 实现 `_add` 函数
int add(int a, int b) {
   return a + b;
}

// 实现 `_multiply` 函数
int multiply(int a, int b) {
   return a * b;
}
