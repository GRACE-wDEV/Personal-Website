#include <bits/stdc++.h>
using namespace std;

int main() {
  int n, a, b;
  cin>> n >> a >> b;
  int t_sum = 0;
  for(int i = 1; i <= n; i++)
  {
    int sum = 0;
    int n = i;
    while(n != 0)
    {
      sum += n%10;
      n /= 10;
    }
    if( sum >= a && sum <= b)
    {
      t_sum += i;
    }
  }
  cout<<t_sum<<endl;
}