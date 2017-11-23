'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../components/Layout.js');

var _Layout2 = _interopRequireDefault(_Layout);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/arielfernandez/Documents/Aerolab/products-viewer/pages/post.js?entry';


var Post = function Post(props) {
    return _react2.default.createElement(_Layout2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-4226702477' + ' ' + 'row title',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-4226702477' + ' ' + 'col-sm-8 col-lg-10 title-text',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, _react2.default.createElement('h1', {
        className: 'jsx-4226702477',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, 'Producto seleccionado')), _react2.default.createElement('div', {
        className: 'jsx-4226702477' + ' ' + 'col-sm-4 col-lg-2 title-img',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, _react2.default.createElement('img', { src: '/static/bag.png', className: 'jsx-4226702477',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }), _react2.default.createElement('img', { src: '/static/row_up.png', className: 'jsx-4226702477',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }), _react2.default.createElement('img', { src: '/static/row_down.png', className: 'jsx-4226702477',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }))), _react2.default.createElement('div', {
        className: 'jsx-4226702477' + ' ' + 'body',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-4226702477' + ' ' + 'row title col-sm-12',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-4226702477' + ' ' + 'col-sm-8 col-md-8 col-lg-8',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }, _react2.default.createElement('h1', {
        className: 'jsx-4226702477',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }, props.product.name), _react2.default.createElement('h4', {
        className: 'jsx-4226702477',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }, props.product.description), _react2.default.createElement('h6', {
        className: 'jsx-4226702477',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    }, props.product.item)), _react2.default.createElement('div', {
        className: 'jsx-4226702477' + ' ' + 'col-sm-4 col-md-4 col-lg-4',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 23
        }
    }, _react2.default.createElement('h2', {
        className: 'jsx-4226702477',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 24
        }
    }, 'Precio: $', props.product.prize), _react2.default.createElement('h2', {
        className: 'jsx-4226702477',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    }, 'Comprar   ', _react2.default.createElement('img', { src: '/static/available.png', className: 'jsx-4226702477',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    })))), _react2.default.createElement('div', {
        className: 'jsx-4226702477' + ' ' + 'img-show',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 28
        }
    }, _react2.default.createElement('img', { src: '/static/' + props.product.img_show, className: 'jsx-4226702477',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 29
        }
    }))), _react2.default.createElement(_style2.default, {
        styleId: '4226702477',
        css: '@font-face{font-family:\'SFUIDisplay-Bold\';font-style:normal;font-weight:normal;src:url(\'../static/fonts/SFUIDisplay-Bold.woff\') format(\'woff\');src:url(\'../static/fonts/SFUIDisplay-Heavy.woff\') format(\'woff\');src:url(\'../static/fonts/SFUIDisplay-Medium.woff\') format(\'woff\');}.body.jsx-4226702477{font-family:SFUIDisplay-Bold;}.title.jsx-4226702477{width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}.title-img.jsx-4226702477 img.jsx-4226702477{margin:20px 5px;max-width:48px;max-height:48px;float:right;}.title-text.jsx-4226702477 h1.jsx-4226702477{font-family:SFUIDisplay-Bold;font-size:46px;color:#000000;text-align:left;margin:20px;}.title.jsx-4226702477{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;margin:0px;}.img-show.jsx-4226702477{text-align:center;margin:20px;}.img-show.jsx-4226702477 img.jsx-4226702477{width:500px;border-radius:10px;}h4.jsx-4226702477{font-family:SFUIDisplay-Bold;font-size:17px;color:#000000;-webkit-letter-spacing:-0.04px;-moz-letter-spacing:-0.04px;-ms-letter-spacing:-0.04px;letter-spacing:-0.04px;text-align:left;margin:15px 0;}h6.jsx-4226702477{font-family:SFUIDisplay-Bold;font-size:15px;color:rgba(0,0,0,0.48);-webkit-letter-spacing:-0.04px;-moz-letter-spacing:-0.04px;-ms-letter-spacing:-0.04px;letter-spacing:-0.04px;text-align:left;}img.jsx-4226702477{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Bvc3QuanM/ZW50cnkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0JvQixBQUd5QyxBQUdqQixBQUlLLEFBTVksQUFPUixBQUlGLEFBSU4sQUFJZ0IsQUFRQSxBQU9kLEFBR2lCLFdBOUNYLENBeUJELEdBbUJyQixDQXhDaUIsRUFpQkgsV0F4QmQsQUFhZ0IsQUFtQkEsQUFRQSxDQWZoQixDQWpCa0IsQUFxQmxCLEFBcUJvQixhQXBDTCxBQW1CQSxBQVFTLEdBaENYLEVBMENRLFNBcENKLEFBbUJPLENBeEJ4QixRQWdDd0IsQ0FVMEMsTUFwQ3BELFlBQ2QsZ0JBR2EsV0FoQmIsQUFpQkEsbUJBZ0NtRSxtQ0FsQmxELFNBUUEsT0FQRCxTQVFoQixLQVBBLEFBaUJvRSxrRUFDdEUiLCJmaWxlIjoicGFnZXMvcG9zdC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYXJpZWxmZXJuYW5kZXovRG9jdW1lbnRzL0Flcm9sYWIvcHJvZHVjdHMtdmlld2VyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC5qcyc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcblxuY29uc3QgUG9zdCA9ICAocHJvcHMpID0+IChcbiAgICA8TGF5b3V0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB0aXRsZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOCBjb2wtbGctMTAgdGl0bGUtdGV4dFwiPlxuICAgICAgICAgICAgICAgIDxoMT5Qcm9kdWN0byBzZWxlY2Npb25hZG88L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00IGNvbC1sZy0yIHRpdGxlLWltZ1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgL3N0YXRpYy9iYWcucG5nYH0vPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgL3N0YXRpYy9yb3dfdXAucG5nYH0vPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgL3N0YXRpYy9yb3dfZG93bi5wbmdgfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgdGl0bGUgY29sLXNtLTEyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOCBjb2wtbWQtOCBjb2wtbGctOFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDE+e3Byb3BzLnByb2R1Y3QubmFtZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICA8aDQ+e3Byb3BzLnByb2R1Y3QuZGVzY3JpcHRpb259PC9oND5cbiAgICAgICAgICAgICAgICAgICAgPGg2Pntwcm9wcy5wcm9kdWN0Lml0ZW19PC9oNj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00IGNvbC1tZC00IGNvbC1sZy00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5QcmVjaW86ICR7cHJvcHMucHJvZHVjdC5wcml6ZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICA8aDI+Q29tcHJhciAgIDxpbWcgIHNyYz17YC9zdGF0aWMvYXZhaWxhYmxlLnBuZ2B9Lz48L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1zaG93XCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2Avc3RhdGljLyR7cHJvcHMucHJvZHVjdC5pbWdfc2hvd31gfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmJvZHl7XG4gICAgICAgICAgICBmb250LWZhbWlseTpTRlVJRGlzcGxheS1Cb2xkO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGl0bGV7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGl0bGUtaW1nIGltZ3tcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCA1cHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQ4cHg7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgICAgZmxvYXQ6cmlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aXRsZS10ZXh0IGgxe1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6U0ZVSURpc3BsYXktQm9sZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTo0NnB4O1xuICAgICAgICAgICAgY29sb3I6IzAwMDAwMDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRpdGxle1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmltZy1zaG93e1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW1nLXNob3cgaW1ne1xuICAgICAgICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDR7XG4gICAgICAgICAgICBmb250LWZhbWlseTpTRlVJRGlzcGxheS1Cb2xkO1xuICAgICAgICAgICAgZm9udC1zaXplOjE3cHg7XG4gICAgICAgICAgICBjb2xvcjojMDAwMDAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6LTAuMDRweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICAgICAgICAgIG1hcmdpbjogMTVweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoNntcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OlNGVUlEaXNwbGF5LUJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemU6MTVweDtcbiAgICAgICAgICAgIGNvbG9yOnJnYmEoMCwwLDAsMC40OCk7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzotMC4wNHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWd7XG4gICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1NGVUlEaXNwbGF5LUJvbGQnO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgIHNyYzogdXJsKCcuLi9zdGF0aWMvZm9udHMvU0ZVSURpc3BsYXktQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgICAgICAgICBzcmM6IHVybCgnLi4vc3RhdGljL2ZvbnRzL1NGVUlEaXNwbGF5LUhlYXZ5LndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgICAgIHNyYzogdXJsKCcuLi9zdGF0aWMvZm9udHMvU0ZVSURpc3BsYXktTWVkaXVtLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG5cbik7XG5cblBvc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IGlkIH0gPSBjb250ZXh0LnF1ZXJ5O1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDQvcHJvZHVjdHMvJHtpZH1gKTtcbiAgICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBcbiAgICByZXR1cm4geyBwcm9kdWN0IH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0Il19 */\n/*@ sourceURL=pages/post.js?entry */'
    }));
};

Post.getInitialProps = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(context) {
        var id, res, product;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        id = context.query.id;
                        _context.next = 3;
                        return (0, _isomorphicUnfetch2.default)('http://localhost:3004/products/' + id);

                    case 3:
                        res = _context.sent;
                        _context.next = 6;
                        return res.json();

                    case 6:
                        product = _context.sent;
                        return _context.abrupt('return', { product: product });

                    case 8:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function (_x) {
        return _ref.apply(this, arguments);
    };
}();

exports.default = Post;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Bvc3QuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwiZmV0Y2giLCJQb3N0IiwicHJvcHMiLCJwcm9kdWN0IiwibmFtZSIsImRlc2NyaXB0aW9uIiwiaXRlbSIsInByaXplIiwiaW1nX3Nob3ciLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0IiwiaWQiLCJxdWVyeSIsInJlcyIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxPQUFRLFNBQVIsQUFBUSxLQUFBLEFBQUMsT0FBRDsyQkFDVixBQUFDOztzQkFBRDt3QkFBQSxBQUNJO0FBREo7QUFBQSxLQUFBLGtCQUNJLGNBQUE7NENBQUEsQUFBZTs7c0JBQWY7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksY0FBQTs0Q0FBQSxBQUFlOztzQkFBZjt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxjQUFBO21CQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FGUixBQUNJLEFBQ0ksQUFFSiwyQ0FBQSxjQUFBOzRDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0k7QUFESjtBQUFBLDhDQUNTLEtBQUwsOEJBQUE7O3NCQUFBO3dCQURKLEFBQ0ksQUFDQTtBQURBOytDQUNLLEtBQUwsaUNBQUE7O3NCQUFBO3dCQUZKLEFBRUksQUFDQTtBQURBOytDQUNLLEtBQUwsbUNBQUE7O3NCQUFBO3dCQVJaLEFBQ0ksQUFJSSxBQUdJLEFBR1I7QUFIUTswQkFHUixjQUFBOzRDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLGNBQUE7NENBQUEsQUFBZTs7c0JBQWY7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksY0FBQTs0Q0FBQSxBQUFlOztzQkFBZjt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxjQUFBO21CQUFBOztzQkFBQTt3QkFBQSxBQUFLO0FBQUw7QUFBQSxhQUFLLEFBQU0sUUFEZixBQUNJLEFBQW1CLEFBQ25CLHVCQUFBLGNBQUE7bUJBQUE7O3NCQUFBO3dCQUFBLEFBQUs7QUFBTDtBQUFBLGFBQUssQUFBTSxRQUZmLEFBRUksQUFBbUIsQUFDbkIsOEJBQUEsY0FBQTttQkFBQTs7c0JBQUE7d0JBQUEsQUFBSztBQUFMO0FBQUEsYUFBSyxBQUFNLFFBSm5CLEFBQ0ksQUFHSSxBQUFtQixBQUV2Qix3QkFBQSxjQUFBOzRDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLGNBQUE7bUJBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQUFjLG1CQUFBLEFBQU0sUUFEeEIsQUFDSSxBQUE0QixBQUM1Qix3QkFBQSxjQUFBO21CQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FBYyxxREFBTSxLQUFOLG9DQUFBOztzQkFBQTt3QkFUMUIsQUFDSSxBQU1JLEFBRUksQUFBYyxBQUd0QjtBQUhzQjsyQkFHdEIsY0FBQTs0Q0FBQSxBQUFlOztzQkFBZjt3QkFBQSxBQUNJO0FBREo7QUFBQSw4Q0FDUyxrQkFBZ0IsTUFBQSxBQUFNLFFBQTNCLEFBQW1DLHFCQUFuQzs7c0JBQUE7d0JBeEJaLEFBV0ksQUFZSSxBQUNJO0FBQUE7O2lCQXhCWjthQURVLEFBQ1Y7QUFBQTtBQURKOztBQTRGQSxLQUFBLEFBQUssOEJBQUw7d0ZBQXVCLGlCQUFBLEFBQWdCLFNBQWhCO3FCQUFBO3NFQUFBO3NCQUFBO2lEQUFBO3lCQUNYO0FBRFcsNkJBQ0osUUFESSxBQUNJLE1BREosQUFDWDt3Q0FEVzsrQkFFRCxxRUFGQyxBQUVELEFBQXdDOzt5QkFBcEQ7QUFGYSx1Q0FBQTt3Q0FBQTsrQkFHRyxJQUhILEFBR0csQUFBSTs7eUJBQXBCO0FBSGEsMkNBQUE7eURBS1osRUFBRSxTQUxVLEFBS1o7O3lCQUxZO3lCQUFBO3dDQUFBOztBQUFBO29CQUFBO0FBQXZCOzt5QkFBQTtnQ0FBQTtBQUFBO0FBUUE7O2tCQUFBLEFBQWUiLCJmaWxlIjoicG9zdC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYXJpZWxmZXJuYW5kZXovRG9jdW1lbnRzL0Flcm9sYWIvcHJvZHVjdHMtdmlld2VyIn0=