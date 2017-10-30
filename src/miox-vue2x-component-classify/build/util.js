'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_1f2xhcunzt = function () {
  var path = '/Users/shenyunjie/CodeBox/miox/src/miox-vue2x-component-classify/src/util.js',
      hash = '08eb0a05c872351e13ca64338395dc0d529049d7',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/shenyunjie/CodeBox/miox/src/miox-vue2x-component-classify/src/util.js',
    statementMap: {
      '0': {
        start: {
          line: 1,
          column: 26
        },
        end: {
          line: 12,
          column: 1
        }
      },
      '1': {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 25,
          column: 3
        }
      },
      '2': {
        start: {
          line: 16,
          column: 16
        },
        end: {
          line: 18,
          column: 26
        }
      },
      '3': {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 53
        }
      },
      '4': {
        start: {
          line: 20,
          column: 29
        },
        end: {
          line: 20,
          column: 53
        }
      },
      '5': {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 53
        }
      },
      '6': {
        start: {
          line: 21,
          column: 35
        },
        end: {
          line: 21,
          column: 53
        }
      },
      '7': {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 24,
          column: 6
        }
      },
      '8': {
        start: {
          line: 23,
          column: 17
        },
        end: {
          line: 23,
          column: 44
        }
      }
    },
    fnMap: {
      '0': {
        name: 'createDecorator',
        decl: {
          start: {
            line: 14,
            column: 16
          },
          end: {
            line: 14,
            column: 31
          }
        },
        loc: {
          start: {
            line: 14,
            column: 40
          },
          end: {
            line: 26,
            column: 1
          }
        },
        line: 14
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 15,
            column: 9
          },
          end: {
            line: 15,
            column: 10
          }
        },
        loc: {
          start: {
            line: 15,
            column: 33
          },
          end: {
            line: 25,
            column: 3
          }
        },
        line: 15
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 23,
            column: 6
          },
          end: {
            line: 23,
            column: 7
          }
        },
        loc: {
          start: {
            line: 23,
            column: 17
          },
          end: {
            line: 23,
            column: 44
          }
        },
        line: 23
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 16,
            column: 16
          },
          end: {
            line: 18,
            column: 26
          }
        },
        type: 'cond-expr',
        locations: [{
          start: {
            line: 17,
            column: 8
          },
          end: {
            line: 17,
            column: 14
          }
        }, {
          start: {
            line: 18,
            column: 8
          },
          end: {
            line: 18,
            column: 26
          }
        }],
        line: 16
      },
      '1': {
        loc: {
          start: {
            line: 20,
            column: 4
          },
          end: {
            line: 20,
            column: 53
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 20,
            column: 4
          },
          end: {
            line: 20,
            column: 53
          }
        }, {
          start: {
            line: 20,
            column: 4
          },
          end: {
            line: 20,
            column: 53
          }
        }],
        line: 20
      },
      '2': {
        loc: {
          start: {
            line: 21,
            column: 4
          },
          end: {
            line: 21,
            column: 53
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 21,
            column: 4
          },
          end: {
            line: 21,
            column: 53
          }
        }, {
          start: {
            line: 21,
            column: 4
          },
          end: {
            line: 21,
            column: 53
          }
        }],
        line: 21
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0],
      '2': [0, 0]
    },
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

exports.createDecorator = createDecorator;
var lifeCycles = exports.lifeCycles = (cov_1f2xhcunzt.s[0]++, ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeDestroy', 'destroyed', 'beforeUpdate', 'updated', 'activated', 'deactivated']);

function createDecorator(handle) {
  cov_1f2xhcunzt.f[0]++;
  cov_1f2xhcunzt.s[1]++;

  return function (target, key, index) {
    cov_1f2xhcunzt.f[1]++;

    var ctx = (cov_1f2xhcunzt.s[2]++, typeof target === 'function' ? (cov_1f2xhcunzt.b[0][0]++, target) : (cov_1f2xhcunzt.b[0][1]++, target.constructor));

    cov_1f2xhcunzt.s[3]++;
    if (!ctx.__decorators__) {
        cov_1f2xhcunzt.b[1][0]++;
        cov_1f2xhcunzt.s[4]++;
        ctx.__decorators__ = [];
      } else {
      cov_1f2xhcunzt.b[1][1]++;
    }cov_1f2xhcunzt.s[5]++;
    if (typeof index !== 'number') {
        cov_1f2xhcunzt.b[2][0]++;
        cov_1f2xhcunzt.s[6]++;
        index = undefined;
      } else {
      cov_1f2xhcunzt.b[2][1]++;
    }cov_1f2xhcunzt.s[7]++;
    ctx.__decorators__.push(function (options) {
      cov_1f2xhcunzt.f[2]++;
      cov_1f2xhcunzt.s[8]++;
      return handle(options, key, index);
    });
  };
}