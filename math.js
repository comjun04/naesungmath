//000A 더하기//
exports.plus = function (a, b) {
    return a + b;
 };
//000B 빼기// 
 exports.minus = function (a, b) {
     return a - b;
 };
 //000C 곱하기//
 exports.multiply = function (a, b) {
     return a * b;
 };
 //000D 나누기//
 exports.divide = function (a, b) {
     return a / b;
 };
 //000E a의 b제곱//
 exports.caret = function (a, b) {
     return a ** b;
 };
 //000F 좌표//
 exports.pow = function(a, b){
  return Math.pow(a, b);
 };
 //000G 제곱//
 exports.sqrt = function(a){
 return Math.sqrt(a);	
 };
 //000H 랜덤//
 exports.random = function(a, b){
    var ranNum = Math.floor((Math.random() * b) + a); 
        return ranNum;
 };
 //000I 소수//
 exports.primenumber = function(a, b) {
    let results = [2];
    for (let i = a; i <= b; i++) {
        let isPrimeNumber = true;
        for (let j = 0; j < results.length && j < i; j++) {
            if (i % results[j] === 0) {
                isPrimeNumber = false;
                break;
            }
        }
 
        if (isPrimeNumber) {
            results.push(i);
        }
    }
 
    return results.filter((n) => a <= n && n <= b);
 };
 //000J 호도법//
 exports.pi2 = function(a) {
     return 2 * Math.PI * a;
 };

//000K 파이//
exports.pi= Math.PI;
 
exports.round = function(a) {
    return Math.round(a);
 };

//001 정삼각형의 넓이//
exports.eqtria = function(a) {
    return 3**0.5/4*a*a;
};
//002 정삼각형의 높이//
exports.eqtrih = function(a) {
    return (3^0.5/2*a);
 };

//003 직각삼각형의 넓이//
 exports.rtria = function(a, b) {
    return (0.5*a*b);
 };

//004 피타고라스 정리//
exports.pytagoras = function(a, b) {
    return ((a*a+b*b)**0.5);
 };

//005 이등변삼각형의 넓이//
exports.quadtria = function (a, b) {
    return (a/4*(4*b*b-a*a)**0.5)
 };

//006 헤론의 공식//
 exports.triaThreeEdge = function(a, b, c) {
    const cos_theta = ((a*a)+(b*b)-(c*c)) / (2*a*b);
    const sin_theta = Math.sqrt(1-(cos_theta**2));
    return (a*b*sin_theta)/2;
 };

//007 삼각형의 넓이//
 exports.triah = function (a, h) {
    return (0.5*a*h);
 };

//008 각의 삼각형의 넓이//
 exports.triaa = function (a, b, t) {
    return (0.5*a*b*(sin(t)));
};
//009 내접원과 삼각형의 넓이 공식//
 exports.inscir = function (a, b, c, r) {
    return (((a+b+c)/2)*r);
};
//010.1 외접원과 삼각형의 넓이 공식//
 exports.circir1 = function (a, b, c, r) {
    return (a*b*c/4/r);
 };
//010.2 외접원과 삼각형의 넓이 공식//
 exports.circri2 = function (a, b, c, r) {
    return (2*r*r*(sin(a))*(sin(b))*(sin(c)));
 };
//011 두 벡터가 생성하는 삼각형의 넓이 공식//

//012 사선 공식//
 
//201 뉴턴 방법//
 exports.newtonsmethod = function (f, count, initx=2) {
     function diff(f, x, density=5) {
         const dx = 2 * (10**-density);
         const dy = f(x+(10**-density)) - f(x-(10**-density));
         return dy / dx;
     }
     function newton_go(f, x, go=0) {
         const next = x - f(x) / diff(f, x);
         if(go == count - 1) {
            return next;
        }
         return newton_go(f, next, go+1);
     }

     return newton_go(f, initx, 0);
 };
//202.1 테일러 급수//
 exports.taylor = function(f, a, count) {
     let diffs = [(x) => f(a)];
     let taylors = [];
     let fact = [1];

     function diff(fun, density=5) {
        const dx = 2 * (10**-density);
        const dy = (x) => fun(x+(10**-density)) - fun(x-(10**-density));
        return (x) => dy(x) / dx;
    }

    taylors.push((x) => diffs[0](x));

    for(let i=1;i<=count;i++) {
        diffs.push(diff(diffs[i-1]));
        let factorial = 1;
        for(let j=1;j<=i;j++) {
            factorial *= j;
        }
        fact.push(factorial);

        taylors.push(
            function(x) {
                return diffs[i](a)/fact[i]*((x-a)**i);
            }
        );
    }

    function res(x) {
        result = 0;
        for(let i=0;i<=count;i++) {
            result += taylors[i](x);
        }
        return result;
    }

    return res;
 };
//202.2 매클로린 급수//
 exports.maclaurin = function(f, count) {
     return exports.taylor(f, 0, count);
 };
//203 행렬곱//
 exports.matrixmultiply = function(matrix_a, matrix_b) {
     if(matrix_a[0].length != matrix_b.length) {
         console.log("잘못된 행렬곱 인자의 크기");
         return;
     }
     let result = [];
     for(let i=0;i<matrix_a.length;i++) {
         result.push([]);
         for(let j=0;j<matrix_b[0].length;j++) {
             let sum = 0;
             for(let k=0;k<matrix_b.length;k++) {
                 if(!isNaN(matrix_a[i][k]) && !isNaN(matrix_b[k][j])) {
                    sum += matrix_a[i][k] * matrix_b[k][j];
                 }
             }
             result[i].push(sum);
         }
     }

     return result;
 };
//204 LU 분해법//
exports.LUDecomposition = function(matrix) {
    if(matrix.length !== matrix[0].length) {
        console.log("행과 열의 크기가 같지 않음");
        return;
    }
    const len = matrix.length;
    let L = [];
    let U = [];
    for(let i=0;i<len;i++) {
        L.push([]);
        U.push([]);
        for(let j=0;j<len;j++) {
            L[i].push(0);
            U[i].push(0);
        }
    }
  
    for(let i=0;i<len;i++) {
        for(let k=i;k<len;k++) {
            let sum = 0;
            for(let j=0;j<i;j++) {
                sum += L[i][j] * U[j][k];
            }
            U[i][k] = matrix[i][k] - sum;
        }
        for(let k=i;k<len;k++) {
            if(i === k) {
                L[i][i] = 1;
            } else {
               let sum = 0;
               for(let j=0;j<i;j++) {
                   sum += L[k][j] * U[j][i];
               }
               L[k][i] = (matrix[k][i] - sum) / U[i][i];
            }
       }
    }
  
    return {Lower:L, Upper:U};
  };
  
//205 행렬의 스칼라곱//
 exports.matrix_scala_multiplation = function(matrix, k) {
     let res = []
     for(let i=0;i<matrix.length;i++) {
         res.push([]);
         for(let j=0;j<matrix[0].length;j++) {
             res[i].push(matrix[i][j] * k);
         }
     }

     return res;
 };
//206 행렬식//
 exports.determinant = function(matrix) {
     if(matrix.length !== matrix[0].length) {
        console.log("행과 열의 크기가 같지 않음");
        return;
     }
     if(matrix.length > 2) {
         let result = 0;
         for(let i=0;i<matrix[0].length;i++) {
             const K = matrix[0][i];
             let mat = [];
             for(let j=1;j<matrix.length;j++) {
                 mat.push([]);
                 for(let k=0;k<matrix[0].length;k++) {
                     if(k !== i) {
                        mat[j-1].push(matrix[j][k]);
                     }
                 }
             }
             if(i % 2 == 0) {
                result += K * exports.determinant(mat);
             } else {
                result -= K * exports.determinant(mat);
             }
         }
         return result;
     } else {
         return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
     }
 }
//207 가우스 소거법//
 exports.gaussian = function(matrix, m, n) {
    let X = [];
    for(let i=0;i<matrix.length;i++) {
        X.push([]);
        for(let j=0;j<matrix[i].length;j++) {
            X[i].push(matrix[i][j]);
        }
    }

    for(let i=0;i<n;i++) {
        let k = X[i][i];
        for(let j=0;j<m;j++) {
            X[i][j] /= k;
        }
        for(let j=0;j<n;j++) {
            if(i !== j) {
                let ratio = X[j][i];
                for(let l=0;l<matrix[j].length;l++) {
                    X[j][l] -= ratio * X[i][l];
                }
            }
        }
    }

    return X;
 }
//208 행렬의 덧셈//
 exports.matrix_add = function(matrix_a, matrix_b) {
     if(matrix_a.length !== matrix_b.length || matrix_a[0].length !== matrix_b[0].length) {
         console.log("행렬의 크기 불일치");
         return;
     }
     let result = [];
     for(let i=0;i<matrix_a.length;i++) {
         result.push([]);
         for(let j=0;j<matrix_a[0].length;j++) {
             result[i].push(matrix_a[i][j] + matrix_a[i][j]);
         }
     }
     return result;
 }
  //209 행렬의 뺄셈//
  exports.matrix_sub = function(matrix_a, matrix_b) {
    if(matrix_a.length !== matrix_b.length || matrix_a[0].length !== matrix_b[0].length) {
        console.log("행렬의 크기 불일치");
        return;
    }
    let result = [];
    for(let i=0;i<matrix_a.length;i++) {
        result.push([]);
        for(let j=0;j<matrix_a[0].length;j++) {
            result[i].push(matrix_a[i][j] - matrix_b[i][j]);
        }
    }
    return result;
  }

//013 무게중심 공식//
  exports.centerofgravity = function (a1, a2, b1, b2, c1, c2) {
      return ((a1+b1+c1)/3) ((a2+b2+c2)/3)
  };    
      
//014 중선 정리//
  //exports.ApolloniusTheorem = function (ab, ac , am, bm) {
      
//015 정사각형의 넓이 공식//
   exports.square = function (a) {
      return (a**2)
   };
//016 직사각형의 넓이 공식//
   exports.rectarea = function (a, b){
      return (a*b)
   };
//017 직사각형의 둘레 공식//
   exports.rectper = function (a, b) {
      return ((a)*2+(b)*2)
   };      
//018 직사각형의 대각선 길이 공식//
   exports.rectdiag = function (a, b) {
      return (((a)**2+(b)**2)**0.5)
   };      
//019 마름모의 넓이 공식//
   exports.rhomarea = function (a, b) {
      return (0.5*(a)*(b))
   };    
//020 평행사변형의 넓이 공식//
   exports.paraarea = function (a, h) {
      return (a*h)
   };   
//021 사다리꼴의 넓이 공식//
   exports.trapearea = function (a, b, h) {
      return (0.5*(a+b)*h)
   };   
//022 사각형의 넓이 공식//
   exports.squarearea = function (a, b, t) {
      return (0.5*(a)*(b)*(sin(t)))
   };
//023 정오각형의 넓이 공식//
   exports.pentarea = function (a) {
      return ((((a)**2)/4)*((25+10((5)**0.5))**0.5))
   };        
//024 정오각형의 넓이 공식//
    exports.pentheight = function (a) {
      return (((25+10*((5)**0.5))/2)*(a))        
   };
//025 정오각형의 대각선 길이//
  exports.pentadiag = function (a) {
    //간단한 것인데 귀찮은 것이라 작성//
    return ((1+((5)**0.5)/2)*(a));
  };

//026 정육각형의 넓이 공식/
//가장 빠른 걸로//
  exports.hexaarea = function (a) {
    return ((3*((3)^0.5))/2)*(a**2);
  };

//027 다각형의 대각선 공식...을 왜 하고 잇지//
  exports.polydiag = function (n) {
    return (n*(n-3)/2);
  };

//028.1 다각형의 내각의 합_60분법//
  exports.polyanglesum_deg = function (n) {
    return (180*(n-2));
  };

//028.2 다각형의 내각의 합_호도법//
  exports.polyanglesum_rad = function (n) {
    return ((Math.PI)*(n-2));
  };

//029 정다각형의 넓이//
  exports.polyarea = function (n, a) {
      return n*(a**2)/(4*(Math.tan(a/(Math.PI))));
  };

//030 정다각형의 내각//
  exports.polyangle_deg = function (n) {
      return (180*(n-2)/n);
  };

//030.2 정사각형의 내각_호도법//
  exports.polyangle_rad = function (n) {
      return ((Math.PI)*(n-2)/n);
  };

//031 원의 넓이//
  exports.circlearea = function (r) {
      return ((Math.PI)*(r**2));
  };

//032 원의 둘레//
  exports.circleperi = function (r) {
      return (2*(Math.PI)*r);
  };

//033 원방 그래프//
/*  exports.circleeq = function (x, y, a, b) {
      return ()
  };*/

//034 원주각의 중심각//
  exports.circumference = function (a) {
      return (2*a);
  };

//035 방멱의 정리, 일률과 혼동되지 않도록 mathpower으로 표기//
  exports.mathpower = function (f, g) {
      return;
  }
//이거 일치하는지 아닌지로 만들어야 될듯한데요
//선분이라 좀...

//036 접현의 정리//
//그냥 이건 다 똑같아서...

//037 원주율 공식//
//이게 공식이냐?!?!?!

//038 테일러 전개 이미 있다//

//039 부채꼴의 중심각 표시_rad//
  exports.circularsectorangle = function (r, l) {
      return (l/r);
  };

//040 부채꼴의 넓이_rl//
  exports.circularsectorarea_rl = function (r, l) {
      return (0.5*r*l);
  };

//040.2 부채꼴의 넓이_rt_no Re Twit//
  exports.circularsectorarea_rt = function (r, t) {
      return (0.5*r*(t**2));
  };

//041 호의 길이 공식//
  exports.arclength = function (r, l) {
      return (r*l);
  }

  
//042 타원의 넓이//
  exports.evalarea = function (a, b) {
      return ((Math.PI)*a*b);
  }

//043 타원의 이심률//
  exports.evalecc = function (a, b) {
      return ((1-((b**2)/(a**2)))**0.5);
  }

//044 타원의 방정식//

//045 구의 부피//
  exports.spherevolume = function (r) {
      return ((4/3)*(Math.PI)*(r**2));
  }

//046 구의 겉넓이//
  exports.spherearea = function (r) {
      return (4*(Math.PI)*(r**2));
  }

//047 원기둥의 부피//
  exports.cylindervolume = function (r, h) {
      return ((Math.PI)*(r**2)*h);
  }

//048 원기둥의 겉넓이//
  exports.cylinderarea = function (r, h) {
      return ((2*(Math.PI)*r*h)+(2*(Math.PI)*(r**2)))
  }

//049 원뿔의 부피//
  exports.conevolume = function (r, h) {
    return ((1/3)*(Math.PI)*(r**2)*h);
  }

//050 원뿔의 겉넓이//
  exports.conearea = function (r, h) {
    return (((Math.PI)*r*(((r**2)+(h**2))**0.5))+((Math.PI)*(r**2)))
  }

//051 삼각뿔의 부피, 삼각형의 넓이는 위에 잇는 것 사용//
  exports.triangularpyramidvolume = function (a, h) {
    return ((1/3)*a*h);
  }

//052A 정사각뿔의 부피 공식//
  exports.squarepyramidvolume1 = function (a, h) {
    return ((1/3)*(a**2)*h)
  }

//052B 정사각뿔의 부피 공식//
  exports.squarepyramidvolume2 = function (a, b) {
    return ((1/3)*(a**2)*(((b**2)-((a**2)/2))**(0.5)))
  }

//053A 정사각뿔의 겉넓이 공식//
  exports.squarepyramidarea1 = function (a, b) {
    return ((a*((4*(b**2)-(a**2))**(0.5)))+(a**2))
  }   

//053B 정사각뿔의 겉넓이 공식//
   exports.squarepyramidarea1 = function (a, h) {
     return ((a*((4*(h**2)-(a**2))**(0.5)))+(a**2))
   }    

//054 정사각뿔의 높이 공식//
   exports.squarepyramidheight = function (a, b) {
     return (((b**2)-((a**2)/2))**(0.5))
   }
       
//055 정사면체의 부피 공식//       
   exports.tetrahedronvolume = function (a) {
     return (((2**(0.5))/12)*(a**3))
   }

//056 정사면체의 겉넓이 공식//       
   exports.tetrahedronarea = function (a) {
     return ((3**(0.5))*(a**2))
   }    
       
//057 정사면체의 높이 공식//       
   exports.tetrahedronheight = function (a) {
     return (((2/3)**(0.5))*a) 
   }    

//058 정육면체의 부피 공식//
    exports.tetrahedronvolume = function (a) {
        return (a**3)
    }

//059 정육면체의 겉넓이 공식//
    exports.tetrahedronarea = function (a) {
        return (6*(a**2))
    }

//060 직육면체의 넓이 공식//
    exports.cuboidvolume = function (a, b, c) {
        return (a*b*c)
    }

//061 직육면체의 겉넓이 공식//
    exports.cuboidarea = function (a, b, c) {
        return (2*((a*b)+(b*c)+(c*a)))
    }
 
//062 직육면체의 대각선 길이 공식//
    exports.cuboiddiagonal = function (a, b, c) {
        return (((a**2)+(b**2)+(c**2))**0.5)
        }
//063 오일러 다면체 정리//
    exports.eulerpolyhedrontheorem = function (v, e, f) {
       if ((v-e+f) == 2) return true;
       if ((v-e+f) !== 2) return false;
    }
  
//064A 근의 공식//
    exports.rootformulaplus = function (a, b, c) {
        return ((-b+(((b**2)-(4*a*c))**0.5))/(2*a))
    }

//064B 근의 공식//
    exports.rootformulaminus = function (a, b, c) {
        return ((-b-(((b**2)-(4*a*c))**0.5))/(2*a))
    }
        
//065A 짝수 근의 공식//
    exports.rootformulaevenplus = function (a, b, c) {
        b /= 2
        return ((-b+(((b**2)-(a*c))**0.5))/a)
    }
        
//065B 짝수 근의 공식//
    exports.rootformulaevenminus = function (a, b, c) {
      b /= 2
        return ((-b-(((b**2)-(a*c))**0.5))/a)
    }
//066 근과 계수와의 관계 공식//
    exports.rootandcoefficient = function (a, b, c, type) {
        if (type == 1) return -(b/a)
        if (type == 2) return (b/c)
    }
//067A 삼차방정식의 근과 계수와의 관계 공식//
    exports.cubicequationfirst = function (a, b, c, d) {
        let x = ((0.5 * ((2(b ** 3) - (9 * a * b * c) + (27 * (a ** 2) * d) + (((2 * (b ** 3) - (9 * a * b * c) + (27 * (a ** 2) * d)) ** 2) - 4((b ** 2) - 3 * a * c) ** 3) ** 0.5))) ** (1 / 3))
        let y = ((0.5*((2(b**3)-(9*a*b*c)+(27*(a**2)*d)-(((2*(b**3)-(9*a*b*c)+(27*(a**2)*d))**2)-4((b**2)-3*a*c)**3)**0.5)))**(1/3))
        return -(b/(3*a))-((1/(3*a))*x)-((1/(3*a))*y)
    }
        
//067B 삼차방정식의 근과 계수와의 관계 공식//
    exports.cubicequationsecond = function (a, b, c, d) {
        let x = ((0.5*((2(b**3)-(9*a*b*c)+(27*(a**2)*d)+(((2*(b**3)-(9*a*b*c)+(27*(a**2)*d))**2)-4((b**2)-3*a*c)**3)**0.5)))**(1/3))
        let y = ((0.5*((2(b**3)-(9*a*b*c)+(27*(a**2)*d)-(((2*(b**3)-(9*a*b*c)+(27*(a**2)*d))**2)-4((b**2)-3*a*c)**3)**0.5)))**(1/3))
        return 
    }
        
//067C 삼차방정식의 근과 계수와의 관계 공식//
    exports.cubicequationthird = function (a, b, c, d) {
        let x = ((0.5*((2(b**3)-(9*a*b*c)+(27*(a**2)*d)+(((2*(b**3)-(9*a*b*c)+(27*(a**2)*d))**2)-4((b**2)-3*a*c)**3)**0.5)))**(1/3))
        let y = ((0.5*((2(b**3)-(9*a*b*c)+(27*(a**2)*d)-(((2*(b**3)-(9*a*b*c)+(27*(a**2)*d))**2)-4((b**2)-3*a*c)**3)**0.5)))**(1/3))
        return 
    }
        
//068 제곱근 근삿값//
        
//069 황금비 공식//

//070 분모의 유리화 공식//
        
//071 이중근호 공식//
        
//072 이차식 곱셈 공식//
        
//073 이차식 곱셈 공식//
        
//074 합차 공식//
        
//075 세 수의 합의 제곱 공식//
        
//210 60도법-라디안 변환//
  exports.degreeToRad = function(deg) {
    return deg * Math.PI / 180;
}

//211 라디안-60도법 변환//
exports.radToDegree = function(rad) {
    return rad * 180 / Math.PI;
}

//212 diff//
exports.diff = function(f, density=5) {
    let dx = 2 * (10**(-density));
    let dy = (x) => f(x + (10**(-density))) - f(x - (10**(-density)));

    return (x) => dy(x) / dx;
}

//213 적분//
exports.integral = function(f, density=5) {
    let g = (a, b) => {
        let sum = 0;
        for(let k = a; k < b; k += 10**(-density)) {
            sum += (f(k+10**(-density)) + f(k)) / 2 * 10**(-density);
        }
        return sum;
    }

    return g;
};

//214 sqrtDotProduct//
exports.sqrtDotProduct = function(row1, row2) {
    let res = 0;
    for(let i=0;i<row1.length;i++) {
        res += row1[i]*row2[i];
    }

    return res**0.5;
}

//215 일반화//
exports.normailze = function(row) {
    return exports.matrix_scala_multiplation(row, 1/exports.sqrtDotProduct(row, row));
};

//216 교차//
exports.transpose = function(mat) {
    let res = [];

    for(let i=0;i<mat[0].length;i++) {
        res.push([]);
        for(let j=0;j<mat.length;j++) {
            res[i].push(mat[j][i]);
        }
    }

    return res;
}

//217 LQ 분해//
exports.LQDecomposition = function(mat, iteration_count=1000) {
    let AT = exports.transpose(mat);

    AT = exports.QRDecomposition(AT, iteration_count);

    return {L:exports.transpose(AT["R"]), Q:exports.transpose(AT["Q"])}
}

/* exports.SingularValueDecomposition = function(mat, iteration_count=2) {

//     let M = mat;
    
//     let VT = [];

//     let Sigma = [];

//     let Q = [];

//     for(let i=0;i<iteration_count;i++) {
//         let QR = exports.QRDecomposition(M);

//         console.log("QR", QR);

//         Q = QR["Q"];

//         let LPV = exports.LQDecomposition(QR["R"]);

//         VT = LPV["Q"];

//         console.log(LPV);

//         Sigma = LPV["L"];

//         M = Sigma;
//     }

//     for(let i=0;i<Sigma.length;i++) {
//         M[i][i] = M[i][i]**0.5;
//     }

//     return {U:Q, VT: VT, Sigma:Sigma};
// }
*/ 

exports.IdentityMatrix = function(n) {
    let res = [];
    for(let i=0;i<n;i++) {
        res.push([]);
        for(let j=0;j<n;j++) {
            if(i == j) {
                res[i].push(1);
            } else {
                res[i].push(0);
            }
        }
    }

    return res;
}

exports.trace = function(matrix) {
    let res = 0;
    for(let i=0;i<matrix.length;i++) {
        res += matrix[i][i];
    }
    return res;
}

exports.outterProduct_matrix = function(u, v) {
    return exports.matrixmultiply(u, exports.transpose(v));
}

exports.houseHolder = function(mat) {
    function SG(N) {
        if(N < 0) {
            return -1;
        } else {
            return 1;
        }
    }
    let K = 1;
    let B = [];
    for(let i=0;i<mat.length;i++) {
        B.push([]);
        for(let j=0;j<mat[0].length;j++) {
            B[i].push(mat[i][j]);
        }
    }

    
    while(1) {
      function s(k) {
        let res = 0;
        for(let i=k+1;i<B.length;i++) {
            res += B[i][k]**2;
        }

        return res**0.5;
      }
      let S = s(K-1);
      if(S === 0) {
        K += 1;
        continue;
      }
      let z = 1/2*(1+SG(B[K][K-1])*B[K][K-1]/S);


      let v = [];

      for(let i=0;i<K;i++) {
        v.push(0);
      }
      v.push(z**0.5);
      for(let i=K+1;i<mat.length;i++) {
        v.push(SG(B[K][K-1])*B[K-1][i]/(2*v[K]*S));
      }

      v = exports.transpose([v]);

      let vv = exports.matrixmultiply(v, exports.transpose(v));

      let H = exports.matrix_sub(exports.IdentityMatrix(mat.length), exports.matrix_scala_multiplation(vv, 2));
      
      let A = exports.matrixmultiply(exports.matrixmultiply(H, B), H);

      if(K >= B.length - 2) {
        return A;
      } else {
        K += 1;
        B = A;
      }
    }
}

exports.QRDecomposition = function(mat) {
    function sqrtDotProduct(row1, row2) {
        let res = 0;
        for(let i=0;i<row1.length;i++) {
            res += row1[i]*row2[i];
        }

        return res**0.5;
    }

    function dotProduct(row1, row2) {
        let res = 0;
        for(let i=0;i<row1.length;i++) {
            res += row1[i]*row2[i];
        }

        return res;
    }

    function normailze(row) {
        return exports.matrix_scala_multiplation(row, 1/sqrtDotProduct(row, row));
    }

    function normalize_memoi(row, K) {
        return exports.matrix_scala_multiplation(row, 1/K);
    }

    let X = exports.transpose(mat);

    let r = [];
    for(let i=0;i<X.length;i++) {
        r.push([]);
        for(let j=0;j<X[0].length;j++) {
            r[i].push(0);
        }
    }
    let Q = [];
    for(let i=0;i<X.length;i++) {
        Q.push(0);
    }

    let k = 0;
    
    while(1) {
        r[k][k] = sqrtDotProduct(X[k], X[k]);

        Q[k] = normalize_memoi([X[k]], r[k][k])[0];

        for(let j=k+1;j<X.length;j++) {
            r[k][j] = dotProduct(Q[k], X[j]);
        }

        for(let j=k+1;j<X.length;j++) {
            X[j] = exports.matrix_sub([X[j]], exports.matrix_scala_multiplation([Q[k]], r[k][j]))[0];
        }
        
        k += 1;

        if(k === X.length) {
            return {Q:exports.transpose(Q), R:r};
        }
    }
}

exports.isinrange = function(a, b) {
    let g = function(x) {
        if(a <= x && x <= b) {
            return true;
        } else {
            return false;
        }
    }

    return g;
}


/**
* Finding Multiple Roots of Function.
*/
exports.Durand_Kerner = function(f, roots_number=1, iteration_count=15) {

    let roots = [];
    for(let i=0;i<roots_number;i++) {
        roots.push(i+1);
    }

    for(let k=0;k<iteration_count;k++) {
        for(let i=0;i<roots_number;i++) {
            let down = 1;
            for(let j=0;j<roots_number;j++) {
                if(i !== j) {
                    down *= roots[i] - roots[j];
                }
            }
            roots[i] -= f(roots[i]) / down;
        }
    }

    return roots;
}

/**
 * Gauss–Seidel method.
 */
exports.Gauss_Seidel = function(mat, iteration_count=15) {
    let x = [];

    for(let i=0;i<mat.length;i++) {
        x.push(1);
    }

    for(let k=0;k<iteration_count;k++) {
        for(let i=0;i<mat.length;i++) {
            let n = 0;
            for(let j=0;j<mat.length;j++) {
                if(j !== i) {
                    n += mat[i][j]*x[j];
                }
            }
            x[i] = 1/mat[i][i]*(mat[i][mat[0].length-1]-n);
        }
    }

    return x;
}

exports.randomVector = function(len, norm=1) {
    let x = [];

    let current_norm = 0;

    for(let i=0;i<len;i++) {
        x.push(Math.random());
        current_norm += Math.abs(x[i])**2;
    }

    current_norm = current_norm**0.5;

    for(let i=0;i<len;i++) {
        x[i] *= norm/current_norm;
    }

    return x;
}

/**
 * Eigendecomposition of a matrix.
 */
exports.EigenVectorDecomposition = function(mat, iteration_count=100) {
    let V = [];
    for(let i=0;i<mat[0].length;i++) {
        V.push(exports.randomVector(mat.length, 1));
    }

    V = exports.transpose(V);

    let X = [];

    for(let i=0;i<mat.length;i++) {
        X.push([]);
        for(let j=0;j<mat[0].length;j++) {
            X[i].push(mat[i][j]);
        }
    }

    let QR = exports.QRDecomposition(V)


    for(let k=0;k<iteration_count;k++) {
        let W = exports.matrixmultiply(X, QR["Q"]);

        QR = exports.QRDecomposition(W);
    }

    let Q = exports.transpose(QR["Q"]);

    for(let i=0;i<Q.length;i++) {
        let min = Math.abs(Q[i][0]);
        for(let j=0;j<Q[i].length;j++) {
            if(min > Math.abs(Q[i][j])) {
                min = Math.abs(Q[i][j]);
            }
        }
        for(let j=0;j<Q[i].length;j++) {
            Q[i][j] /= min;
        }
        if(Q[i][0] < 0) {
            for(let j=0;j<Q[i].length;j++) {
                Q[i][j] *= -1;
            }
        }
    }

    let res = []

    for(let i=0;i<Q.length;i++) {
        let temp = [];
        for(let j=0;j<Q[i].length;j++) {
            temp.push([]);
            temp[j].push(Q[i][j]);
        }
        let temp2 = exports.matrixmultiply(X, temp);
        for(let j=0;j<Q[i].length;j++) {
            if(((temp2[j][0] === 0) || isNaN(temp2[j][0])) && !res.includes(0)) {
                res.push(0);
                break;
            } else if(Q[i][j] !== 0) {
                res.push(temp2[j][0] / Q[i][j]);
                break;
            }
        }
    }

    for(let i=0;i<Q.length;i++) {
        for(let j=0;j<Q[0].length;j++) {
            if(isNaN(Q[i][j])) {
                Q[i][j] = 0;
            }
        }
    }

    res = res.filter((x) => x !== undefined)

    return {Q: Q, eigenvalue: res};
}

/**
 * Solves System of linear equations.
 */
exports.Cramer = function(mat) {
    let B = [];
    let X = [];

    for(let i=0;i<mat.length;i++) {
        B.push(mat[i][mat[0].length-1]);
    }

    let T = [];

    for(let j=0;j<mat.length;j++) {
        T.push([]);
        for(let k=0;k<mat[0].length-1;k++) {
            T[j].push(mat[j][k]);
        }
    }

    for(let i=0;i<mat.length;i++) {
        let Ai = [];
        for(let j=0;j<mat.length;j++) {
            Ai.push([]);
            for(let k=0;k<mat[0].length-1;k++) {
                Ai[j].push(mat[j][k]);
            }
        }

        for(let j=0;j<mat.length;j++) {
            Ai[j][i] = B[j];
        }


        X.push(exports.determinant(Ai) / exports.determinant(T));
    }

    return X;
}

/**
 * Generates Random Value with ACORN Algorithm:
 * Which is Better, Faster, Simpler than Standard JS PRNG Implementation.
 */
exports.ACORN = function(seed=new Date().getTime(), Modulo_power=60, order=10) {
    let M = 2**Modulo_power;

    let temp = 0 + (seed.toString().split("").reverse().join(""));
    seed = seed * temp;

    function oddorplusone(n) {
        if(n % 2 === 1) {
            return n;
        } else {
            return n+1;
        }
    }

    seed = oddorplusone(seed%M);

    let seed2=(seed+2) % M;

    const go = function(m, n) {
        if(m === 0) {
            return seed;
        } else if(n === 0) {
            return seed2;
        } else {
            return (go(m-1, n) + (m, n-1)) % M;
        }
    }

    let xk = go(order, order);

    return xk / M;
}

exports.gcd = function(a, b) {
    if(b === 0) {
        return a;
    } else {
        return exports.gcd(b, a%b);
    }
}

exports.InverseMatrix = function(A) {
    if(exports.determinant(A) === 0) {
        return null;
    }
    let mat = [];
    let I = exports.IdentityMatrix(A.length);
    for(let i=0;i<A.length;i++) {
        mat.push([]);
        for(let j=0;j<A[i].length;j++) {
            mat[i].push(A[i][j]);
        }
        for(let j=0;j<I[i].length;j++) {
            mat[i].push(I[i][j]);
        }
    }

    mat = exports.gaussian(mat, A.length, A[0].length);

    let res = [];

    for(let i=0;i<A.length;i++) {
        res.push([]);
        for(let j=A[i].length;j<mat[i].length;j++) {
            res[i].push(mat[i][j]);
        }
    }

    return res;
}
