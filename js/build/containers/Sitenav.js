"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sitenav = function (_React$Component) {
	_inherits(Sitenav, _React$Component);

	function Sitenav() {
		_classCallCheck(this, Sitenav);

		return _possibleConstructorReturn(this, (Sitenav.__proto__ || Object.getPrototypeOf(Sitenav)).apply(this, arguments));
	}

	_createClass(Sitenav, [{
		key: "render",
		value: function render() {

			return _react2.default.createElement(
				"div",
				{ id: "sitenav" },
				"\u5929\u732B\u9996\u9875 \u767B\u9646 \u6CE8\u518C\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002 \u6211\u7684\u6DD8\u5B9D\u3002 \u6211\u7684\u5173\u6CE8\u3002 \u8D2D\u7269\u8F66\u3002 \u6536\u85CF\u5939\u3002 \u624B\u673A\u7248\uFF08\u4E0B\u62C9\u663E\u793A\u4E8C\u7EF4\u7801\uFF09\u3002 \u6DD8\u5B9D\u7F51\u3002 \u4F01\u4E1A\u8D2D\u3002 \u7F51\u7AD9\u5BFC\u822A\uFF08\u4E0B\u62C9\u5BFC\u822A\uFF09\u3002"
			);
		}
	}]);

	return Sitenav;
}(_react2.default.Component);

exports.default = Sitenav;