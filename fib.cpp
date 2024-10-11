#include <emscripten.h>
// 声明 `add` 和 `multiply` 函数
extern "C" {
   int add(int a, int b);
   float multiply(float a, float b);
}
EMSCRIPTEN_KEEPALIVE
int add(int a, int b) {
  return a + b;
}

EMSCRIPTEN_KEEPALIVE
float multiply(float a, float b) {
  return a * b;
}

