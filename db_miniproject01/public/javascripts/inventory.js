var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global React, ReactDOM, fetch */

var Logo = function Logo() {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "svg",
      { width: "100%", height: "10%", viewBox: "-10 -10 120 80",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg" },
      React.createElement("path", {
        transform: "scale(1)",
        d: "M5.49614174,11.6998212 C6.63721255,11.4106492 7.73893609,11.0322026 8.80611081,10.5722445 C8.53067993,10.4800588 8.25716842,10.400488 7.98173753,10.3189764 C7.58154701,10.2054424 7.18327587,10.0977307 6.7792466,10.0016635 C7.17271929,9.86775163 7.56235322,9.71540263 7.9395112,9.56208325 C12.316655,7.76785838 15.9586766,4.53165504 18.2993593,0.449284001 C17.657327,0.25035696 16.9903428,0.106741339 16.3166408,0 C13.5949614,4.39192093 9.20822071,7.62424276 4.03741371,8.74696757 C3.01726377,8.97209476 1.96064564,9.09630286 0.892511231,9.15161429 C0.647790409,9.79497345 0.448174994,10.4596809 0.30422157,11.1447662 C1.60747991,11.1564107 2.88578631,11.2534483 4.13242297,11.4523753 C4.59595299,11.5251535 5.04796675,11.6066651 5.49614174,11.6998212 M5.48942391,15.7346438 C6.65256758,15.479435 7.78308181,15.1592109 8.87520845,14.7594161 C8.61129384,14.6575266 8.33970172,14.5556372 8.06427083,14.4692737 C7.66887876,14.33051 7.27540607,14.2043611 6.86465896,14.0869457 C7.27540607,13.9724413 7.66887876,13.8394998 8.06427083,13.7065583 C8.33970172,13.6124319 8.61129384,13.5192758 8.87520845,13.4173864 C9.20822071,13.2844449 9.53163607,13.1563553 9.85313205,13.0175915 C10.6314402,12.6769896 11.3895949,12.3014542 12.1352737,11.8880741 C12.3867123,11.7396066 12.6448688,11.5940502 12.8876702,11.4417012 C16.6103058,9.17587368 19.6918688,5.95713711 21.830057,2.12706378 C21.2907115,1.77093586 20.7244947,1.46138597 20.1429228,1.18288812 C17.9308385,5.12843617 14.6448617,8.37531364 10.6573518,10.4713254 C10.3732838,10.6236744 10.0824978,10.76729 9.7849941,10.9070241 C8.86465187,11.3485451 7.90976082,11.7289324 6.92320002,12.0423638 C6.45199248,12.1908313 5.97886556,12.3237728 5.49614174,12.4382772 C5.04796675,12.5527815 4.59595299,12.6459376 4.13242297,12.7303603 C2.80901115,12.9778061 1.44049393,13.1126884 0.0508635433,13.1126884 C0.0268713059,13.4377642 -2.84217094e-14,13.7647809 -2.84217094e-14,14.0917975 C-2.84217094e-14,14.4207549 0.0268713059,14.740979 0.0508635433,15.0641141 C1.44049393,15.0660549 2.80901115,15.1970556 4.13242297,15.4396495 C4.59595299,15.5289241 5.04796675,15.6220802 5.48942391,15.7346438 M7.9395112,18.6098673 C7.56235322,18.4546072 7.17271929,18.3071101 6.7792466,18.1712575 C7.17655805,18.0751903 7.58154701,17.9665082 7.98173753,17.8529742 C8.25716842,17.7714626 8.53067993,17.6899511 8.80611081,17.6035876 C9.13528431,17.4978166 9.46637718,17.3852531 9.7849941,17.2639561 C10.5892139,16.971873 11.3656027,16.6419452 12.1352737,16.2867876 C12.3886317,16.1674314 12.653506,16.0412826 12.9020656,15.9122226 C13.0988019,15.8161554 13.2897801,15.7142659 13.4730808,15.6152876 C12.8022579,15.2106409 12.1179993,14.8302535 11.3982321,14.4809182 C11.1890198,14.5828077 10.9740494,14.6866379 10.7533208,14.7807644 C10.4558171,14.9069132 10.1506358,15.0291806 9.85313205,15.1524183 C8.89920069,15.5376575 7.92223679,15.8607927 6.91648219,16.1295868 C6.45199248,16.2576764 5.97022835,16.3731511 5.48942391,16.4721294 C5.04796675,16.5672262 4.59595299,16.6448563 4.13242297,16.721516 C2.88386693,16.9146208 1.60076208,17.0155399 0.302302191,17.0291251 C0.444336236,17.7190623 0.647790409,18.3798883 0.885793404,19.0271289 C1.96064564,19.073707 3.01726377,19.2047077 4.03741371,19.4317756 C9.20822071,20.5486782 13.6045583,23.7868223 16.3166408,28.1923285 C16.9970607,28.0787945 17.6659642,27.9448826 18.3060771,27.7362518 C15.9634751,23.65194 12.3185744,20.4070033 7.9395112,18.6098673 M12.8876702,16.7283086 C12.1640644,17.0815254 11.4135872,17.4066013 10.6573518,17.7035363 C14.6467811,19.8014888 17.9327579,23.0532182 20.1429228,27.0094404 C20.7244947,26.7241499 21.2993487,26.4126592 21.830057,26.0536202 C19.6985866,22.2216061 16.6103058,18.9921954 12.8876702,16.7283086 M16.6477337,14.529437 C16.4346826,14.377088 16.2321881,14.2305613 16.0152983,14.0869457 C15.4250893,13.6890916 14.8195252,13.3096746 14.1938076,12.9574282 C13.9538853,12.8206052 13.7178016,12.6837822 13.4730808,12.5576334 C13.2897801,12.4586551 13.0988019,12.3587063 12.9135819,12.267491 C12.2158876,12.6750489 11.4903623,13.0457324 10.7533208,13.3979788 C10.9740494,13.4901645 11.1890198,13.5901133 11.3982321,13.6890916 C11.673663,13.8200923 11.9356583,13.9520634 12.2024519,14.0869457 C12.8828718,14.4411328 13.5469769,14.8127868 14.1938076,15.2184039 C14.421254,15.3629899 14.6467811,15.5017536 14.8675097,15.655073 C18.3780538,18.0004713 21.2993487,21.1561335 23.4049074,24.8493838 C23.9049056,24.4117443 24.3751535,23.9343194 24.8166107,23.421961 C22.7225682,19.9198747 19.9442671,16.8806576 16.6477337,14.529437 M14.8675097,12.5226999 C15.4749931,12.8778574 16.0738394,13.2495113 16.6477337,13.6454247 C19.9442671,11.2951745 22.7196891,8.26080929 24.8079735,4.75969336 C24.3665163,4.24830531 23.9010669,3.77573229 23.4049074,3.33809279 C21.2993487,7.02260975 18.3761345,10.1792423 14.8675097,12.5226999 M77.7252522,6.60922966 C79.0477044,6.60922966 79.7415599,7.89109611 82.4565215,7.42531572 C85.1666846,6.94983157 86.8298265,5.3720005 86.8634156,3.14789914 C86.8739722,2.64233334 86.1465276,2.25903489 85.5083341,3.14789914 C84.5198539,4.5093364 82.6993229,4.19978652 79.9104652,3.65831681 C79.2521182,3.50790856 78.5668999,3.45259714 77.8759235,3.45259714 C74.112981,3.45259714 72.4095321,5.33027434 71.8260409,8.69650803 C71.8260409,8.69650803 71.773258,8.98568002 71.6763294,9.47863093 C71.0007079,9.53588311 70.3154896,9.60477979 69.6024404,9.69793587 C69.3270095,11.0613139 69.3951474,12.6236189 70.9517638,12.4538032 C71.0007079,12.4489513 71.0582893,12.4470105 71.1110722,12.4450698 C70.4767175,15.7472587 69.6024404,20.3895366 69.1897739,22.7320238 C68.5141525,26.5999418 65.551591,27.0356405 63.2627315,26.1496874 C62.6197396,25.8993304 62.2483397,26.4805855 62.8299116,27.2326268 C64.1370087,28.9220511 66.5487084,29.3383423 68.3558037,28.7444723 C70.6734538,27.9943718 72.1619322,26.6688384 72.9709505,22.8077131 C73.4632712,20.437085 74.3413871,15.7297919 74.9498302,12.4382772 C75.8433011,12.4848552 76.8337007,12.5595741 77.9469405,12.6789304 L76.4690187,20.4642555 C76.2847583,21.4501573 77.08322,22.4739038 79.9104652,22.4739038 L82.0237015,11.2466557 C82.241551,10.1016122 81.8883853,9.57372776 80.6484664,9.47571981 C79.4594112,9.36121546 77.6820662,9.259326 75.5304424,9.28649652 C75.5813059,9.00799867 75.6100966,8.85079778 75.6100966,8.85079778 C75.9171972,7.18175139 76.4766962,6.60922966 77.7252522,6.60922966 M38.940361,8.87505718 L33.7532392,14.7924089 L35.8319267,3.68548734 C33.7359648,3.60785727 31.667834,3.71168748 29.8137139,3.9154664 C29.5584365,5.23905901 29.8252301,6.43747314 31.3962418,6.67618559 C31.4183147,6.68006709 31.4403876,6.68685972 31.4662992,6.69365235 L31.4662992,6.7441119 L28.8194756,20.7243162 C28.8165965,21.6199731 29.7004705,22.4739038 32.2753174,22.4739038 L32.3060275,22.4739038 L33.4710905,16.2770839 L34.9461333,20.4671666 C35.2877828,21.4103719 36.2100444,22.4739038 39.0257733,22.4739038 L40.2608937,22.4739038 L37.1610966,15.6385766 L40.0881496,12.7080416 C41.5200063,11.2757669 39.9576318,9.52520897 38.940361,8.87505718 M62.2176297,22.3429031 C62.0381677,23.3220123 62.7617736,24.7232349 65.5755832,24.7232349 L65.5957367,24.7018867 L67.6677063,13.5794391 C68.1216395,11.1874627 67.4143483,9.38838598 64.9239541,9.38838598 C62.6590869,9.38838598 61.0803976,10.9865949 59.9374074,12.9622801 L59.8827051,12.9622801 C60.099595,12.3829657 60.2723391,11.8657554 60.4057359,11.4106492 C60.6936428,10.3451765 60.2896135,9.71540263 59.2838589,9.65135783 C57.8395262,9.65815046 56.3529672,9.75518804 55.0142003,9.90462592 C54.7483663,11.2466557 55.0257166,12.4644773 56.6562291,12.6789304 L56.6562291,12.7303603 L55.1504762,20.6233971 C55.0784995,21.5539875 55.939341,22.4739038 58.6111166,22.4739038 L58.6178344,22.4739038 L59.2781008,18.9766694 C59.7848168,16.1538461 61.8961337,12.7876125 63.1658029,12.7876125 C63.7502538,12.7876125 63.953708,13.27183 63.6955515,14.5556372 L62.2176297,22.3429031 M88.2357716,19.3677308 C87.0188853,19.3677308 86.6033398,18.6205415 86.6033398,17.5395428 C86.6033398,15.4532348 87.7223377,12.7876125 89.8106221,12.7876125 C91.0543796,12.7876125 91.5083128,13.424179 91.5083128,14.6070671 C91.5083128,16.897154 90.3192575,19.3677308 88.2357716,19.3677308 M90.4209846,9.41846763 C86.404684,9.41846763 82.6119912,12.6304116 82.6119912,18.1295313 C82.6119912,21.0096067 83.9891456,22.7582239 87.7530478,22.7582239 C91.8240506,22.7582239 95.5294118,19.3677308 95.5294118,14.1179977 C95.5294118,11.3990047 94.1829674,9.41846763 90.4209846,9.41846763 M46.5766103,19.3677308 C45.3453287,19.3677308 44.93938,18.6205415 44.93938,17.5395428 C44.93938,15.4532348 46.0631764,12.7876125 48.1437832,12.7876125 C49.3875408,12.7876125 49.8462724,13.424179 49.8462724,14.6070671 C49.8462724,16.897154 48.6533784,19.3677308 46.5766103,19.3677308 M48.7541458,9.41846763 C44.7378452,9.41846763 40.9499508,12.6304116 40.9499508,18.1295313 C40.9499508,21.0096067 42.3203874,22.7582239 46.0871686,22.7582239 C50.1485746,22.7582239 53.8606536,19.3677308 53.8606536,14.1179977 C53.8606536,11.3990047 52.5190076,9.41846763 48.7541458,9.41846763",
        className: "logo" })
    )
  );
};

var BusinessButtons = function BusinessButtons() {
  return React.createElement(
    "ul",
    null,
    React.createElement(
      "h6",
      null,
      "Business"
    ),
    React.createElement(
      "li",
      null,
      React.createElement(
        "a",
        { href: "sales.html" },
        React.createElement("i", { className: "fas fa-money-bill" }),
        "Realizar venta"
      )
    ),
    React.createElement(
      "li",
      null,
      React.createElement(
        "a",
        { href: "inventory.html" },
        React.createElement("i", { className: "fas fa-file-invoice-dollar" }),
        "Inventario"
      )
    )
  );
};

var BarButtons = function BarButtons() {
  return React.createElement(
    "div",
    null,
    React.createElement(BusinessButtons, null)
  );
};

var SideBar = function SideBar() {
  return React.createElement(
    "div",
    { className: "sidebar" },
    React.createElement(Logo, null),
    React.createElement(BarButtons, null)
  );
};

var Pie = function Pie() {
  return React.createElement(
    "footer",
    { className: "w3-container w3-center w3-small" },
    React.createElement(
      "span",
      { className: "w3-mobile" },
      "\xA9 Store Manager 2020"
    )
  );
};

var Header = function Header() {
  return React.createElement(
    "div",
    { className: "header" },
    React.createElement(
      "div",
      { className: "name" },
      "Roberto Mateos Contreras"
    ),
    React.createElement(
      "div",
      null,
      "Vendedor | Abarrotes Mateos"
    )
  );
};

var SalesTable = function SalesTable() {
  return React.createElement(
    "div",
    { className: "mdc-layout-grid" },
    React.createElement(
      "div",
      { className: "subtitle" },
      "Total"
    )
  );
};

var TopRow = function TopRow(props) {
  return React.createElement(
    "div",
    { className: "mdc-layout-grid" },
    React.createElement(
      "div",
      { className: "subtitle" },
      "Productos"
    ),
    React.createElement(
      "div",
      null,
      React.createElement(
        "table",
        null,
        React.createElement(
          "tbody",
          null,
          React.createElement(
            "tr",
            null,
            React.createElement(
              "th",
              null,
              "ProductID"
            ),
            React.createElement(
              "th",
              null,
              "ProductName"
            ),
            React.createElement(
              "th",
              null,
              "Price"
            ),
            React.createElement(
              "th",
              null,
              "On Stock"
            )
          ),
          props.query.map(function (element) {
            return React.createElement(
              "tr",
              { key: element.ProductID.N },
              React.createElement(
                "td",
                null,
                element.ProductID.N
              ),
              React.createElement(
                "td",
                null,
                element.ProductName.S
              ),
              React.createElement(
                "td",
                null,
                element.Price.N
              ),
              React.createElement(
                "td",
                null,
                element.Stock.N
              )
            );
          })
        )
      )
    )
  );
};

var InventarioNuevo = function InventarioNuevo(props) {
  return React.createElement(
    "div",
    { className: "mdc-layout-grid" },
    React.createElement(
      "div",
      { className: "subtitle" },
      "Agregar Productos"
    ),
    React.createElement(
      "table",
      null,
      React.createElement(
        "tr",
        null,
        React.createElement(
          "th",
          null,
          "Producto"
        ),
        React.createElement(
          "th",
          null,
          "Cantidad"
        ),
        React.createElement(
          "th",
          null,
          "Contenido"
        ),
        React.createElement(
          "th",
          null,
          "Precio"
        )
      ),
      props.query.map(function (element) {
        return React.createElement(
          "tr",
          { key: element.ProductID.N },
          React.createElement(
            "td",
            null,
            element.ProductID.N
          ),
          React.createElement(
            "td",
            null,
            element.ProductName.S
          ),
          React.createElement(
            "td",
            null,
            React.createElement("input", { type: "number", min: "0", max: "100", id: element.ProductName.S })
          ),
          React.createElement(
            "td",
            null,
            element.Cantidad.S
          ),
          React.createElement(
            "td",
            null,
            element.Price.N
          )
        );
      })
    )
  );
};

var BotonAgregar = function BotonAgregar(props) {
  return React.createElement(
    "button",
    { className: "w3-button w3-purple w3-round w3-margin-left", onClick: props.adding },
    "Agregar"
  );
};

var SalesTitle = function SalesTitle() {
  return React.createElement(
    "div",
    { className: "title" },
    "Reporte de Inventario",
    React.createElement(
      "div",
      { className: "info" },
      "Empleado: EM020398"
    )
  );
};
var TransactionTitle = function TransactionTitle() {
  return React.createElement(
    "div",
    { className: "title" },
    "Inventory",
    React.createElement(
      "div",
      { className: "info" },
      "Empleado: EM020398"
    )
  );
};
var InventoryTitle = function InventoryTitle() {
  return React.createElement(
    "div",
    { className: "title" },
    "Inventario",
    React.createElement(
      "div",
      { className: "info" },
      "Empleado: EM020398"
    )
  );
};

var BotonActualizar = function BotonActualizar(props) {
  return React.createElement(
    "button",
    { className: "w3-button w3-purple w3-round w3-margin-left", onClick: props.update },
    "Actualizar"
  );
};

var Aplicacion = function (_React$Component) {
  _inherits(Aplicacion, _React$Component);

  function Aplicacion(props) {
    _classCallCheck(this, Aplicacion);

    var _this = _possibleConstructorReturn(this, (Aplicacion.__proto__ || Object.getPrototypeOf(Aplicacion)).call(this, props));

    _this.state = {
      isTableVisible: false,
      query: [],
      updated: 0
    };
    _this.actualizar = _this.actualizar.bind(_this);
    _this.addSotck = _this.addSotck.bind(_this);
    return _this;
  }

  _createClass(Aplicacion, [{
    key: "addSotck",
    value: function addSotck() {
      var coffee = document.getElementById("Coffee").value | 0;
      var cookie = document.getElementById("Galletas").value | 0;
      var carnita = document.getElementById("Carnita Asada (Prime)").value | 0;
      var milk = document.getElementById("Leche").value | 0;
      var cerveza = document.getElementById("Cerveza").value | 0;

      // Llamada de Ajax para subir info a BD
      fetch("/add/" + String(milk) + "/" + String(cookie) + "/" + String(coffee) + "/" + String(carnita) + "/" + String(cerveza));
      this.actualizar();
    }
  }, {
    key: "actualizar",
    value: function actualizar() {
      var _this2 = this;

      fetch("/productos") // llamada de AJAX
      .then(function (res) {
        return res.json();
      }).then(function (result) {
        _this2.setState({
          query: result.data,
          isTableVisible: true,
          updated: 1
        });
        console.log(_this2.state.query);
      }, function (error) {
        console.log(error.message);
      });
    }
  }, {
    key: "render",
    value: function render() {

      if (this.state.updated == 0) {
        this.actualizar();
      }
      var query = this.state.query;

      console.log(query);

      return React.createElement(
        "div",
        { className: "wrapper" },
        React.createElement(
          "section",
          { className: "main_content" },
          React.createElement(Header, null),
          React.createElement(SalesTitle, null),
          this.state.isTableVisible == true && React.createElement(TopRow, { query: query }),
          React.createElement(InventarioNuevo, { query: query }),
          React.createElement(BotonAgregar, { adding: this.addSotck }),
          React.createElement(Pie, null)
        ),
        React.createElement(SideBar, null)
      );
    }
  }]);

  return Aplicacion;
}(React.Component);

ReactDOM.render(React.createElement(Aplicacion, null), document.getElementById('root'));