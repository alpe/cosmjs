"use strict";
var $protobuf = require("protobufjs/minimal");
var $Reader = $protobuf.Reader,
  $Writer = $protobuf.Writer,
  $util = $protobuf.util;
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
$root.cosmos = (function () {
  var cosmos = {};
  cosmos.Coin = (function () {
    function Coin(p) {
      if (p)
        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
    }
    Coin.prototype.denom = "";
    Coin.prototype.amount = "";
    Coin.create = function create(properties) {
      return new Coin(properties);
    };
    Coin.encode = function encode(m, w) {
      if (!w) w = $Writer.create();
      if (m.denom != null && Object.hasOwnProperty.call(m, "denom")) w.uint32(10).string(m.denom);
      if (m.amount != null && Object.hasOwnProperty.call(m, "amount")) w.uint32(18).string(m.amount);
      return w;
    };
    Coin.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    Coin.decode = function decode(r, l) {
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
        m = new $root.cosmos.Coin();
      while (r.pos < c) {
        var t = r.uint32();
        switch (t >>> 3) {
          case 1:
            m.denom = r.string();
            break;
          case 2:
            m.amount = r.string();
            break;
          default:
            r.skipType(t & 7);
            break;
        }
      }
      return m;
    };
    Coin.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    return Coin;
  })();
  cosmos.DecCoin = (function () {
    function DecCoin(p) {
      if (p)
        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
    }
    DecCoin.prototype.denom = "";
    DecCoin.prototype.amount = "";
    DecCoin.create = function create(properties) {
      return new DecCoin(properties);
    };
    DecCoin.encode = function encode(m, w) {
      if (!w) w = $Writer.create();
      if (m.denom != null && Object.hasOwnProperty.call(m, "denom")) w.uint32(10).string(m.denom);
      if (m.amount != null && Object.hasOwnProperty.call(m, "amount")) w.uint32(18).string(m.amount);
      return w;
    };
    DecCoin.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    DecCoin.decode = function decode(r, l) {
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
        m = new $root.cosmos.DecCoin();
      while (r.pos < c) {
        var t = r.uint32();
        switch (t >>> 3) {
          case 1:
            m.denom = r.string();
            break;
          case 2:
            m.amount = r.string();
            break;
          default:
            r.skipType(t & 7);
            break;
        }
      }
      return m;
    };
    DecCoin.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    return DecCoin;
  })();
  cosmos.IntProto = (function () {
    function IntProto(p) {
      if (p)
        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
    }
    IntProto.prototype.int = "";
    IntProto.create = function create(properties) {
      return new IntProto(properties);
    };
    IntProto.encode = function encode(m, w) {
      if (!w) w = $Writer.create();
      if (m.int != null && Object.hasOwnProperty.call(m, "int")) w.uint32(10).string(m.int);
      return w;
    };
    IntProto.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    IntProto.decode = function decode(r, l) {
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
        m = new $root.cosmos.IntProto();
      while (r.pos < c) {
        var t = r.uint32();
        switch (t >>> 3) {
          case 1:
            m.int = r.string();
            break;
          default:
            r.skipType(t & 7);
            break;
        }
      }
      return m;
    };
    IntProto.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    return IntProto;
  })();
  cosmos.DecProto = (function () {
    function DecProto(p) {
      if (p)
        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
    }
    DecProto.prototype.dec = "";
    DecProto.create = function create(properties) {
      return new DecProto(properties);
    };
    DecProto.encode = function encode(m, w) {
      if (!w) w = $Writer.create();
      if (m.dec != null && Object.hasOwnProperty.call(m, "dec")) w.uint32(10).string(m.dec);
      return w;
    };
    DecProto.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    DecProto.decode = function decode(r, l) {
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
        m = new $root.cosmos.DecProto();
      while (r.pos < c) {
        var t = r.uint32();
        switch (t >>> 3) {
          case 1:
            m.dec = r.string();
            break;
          default:
            r.skipType(t & 7);
            break;
        }
      }
      return m;
    };
    DecProto.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    return DecProto;
  })();
  cosmos.ValAddresses = (function () {
    function ValAddresses(p) {
      this.addresses = [];
      if (p)
        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
    }
    ValAddresses.prototype.addresses = $util.emptyArray;
    ValAddresses.create = function create(properties) {
      return new ValAddresses(properties);
    };
    ValAddresses.encode = function encode(m, w) {
      if (!w) w = $Writer.create();
      if (m.addresses != null && m.addresses.length) {
        for (var i = 0; i < m.addresses.length; ++i) w.uint32(10).bytes(m.addresses[i]);
      }
      return w;
    };
    ValAddresses.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    ValAddresses.decode = function decode(r, l) {
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
        m = new $root.cosmos.ValAddresses();
      while (r.pos < c) {
        var t = r.uint32();
        switch (t >>> 3) {
          case 1:
            if (!(m.addresses && m.addresses.length)) m.addresses = [];
            m.addresses.push(r.bytes());
            break;
          default:
            r.skipType(t & 7);
            break;
        }
      }
      return m;
    };
    ValAddresses.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    return ValAddresses;
  })();
  cosmos.GasInfo = (function () {
    function GasInfo(p) {
      if (p)
        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
    }
    GasInfo.prototype.gasWanted = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
    GasInfo.prototype.gasUsed = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
    GasInfo.create = function create(properties) {
      return new GasInfo(properties);
    };
    GasInfo.encode = function encode(m, w) {
      if (!w) w = $Writer.create();
      if (m.gasWanted != null && Object.hasOwnProperty.call(m, "gasWanted")) w.uint32(8).uint64(m.gasWanted);
      if (m.gasUsed != null && Object.hasOwnProperty.call(m, "gasUsed")) w.uint32(16).uint64(m.gasUsed);
      return w;
    };
    GasInfo.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    GasInfo.decode = function decode(r, l) {
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
        m = new $root.cosmos.GasInfo();
      while (r.pos < c) {
        var t = r.uint32();
        switch (t >>> 3) {
          case 1:
            m.gasWanted = r.uint64();
            break;
          case 2:
            m.gasUsed = r.uint64();
            break;
          default:
            r.skipType(t & 7);
            break;
        }
      }
      return m;
    };
    GasInfo.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    return GasInfo;
  })();
  cosmos.Result = (function () {
    function Result(p) {
      this.events = [];
      if (p)
        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
    }
    Result.prototype.data = $util.newBuffer([]);
    Result.prototype.log = "";
    Result.prototype.events = $util.emptyArray;
    Result.create = function create(properties) {
      return new Result(properties);
    };
    Result.encode = function encode(m, w) {
      if (!w) w = $Writer.create();
      if (m.data != null && Object.hasOwnProperty.call(m, "data")) w.uint32(10).bytes(m.data);
      if (m.log != null && Object.hasOwnProperty.call(m, "log")) w.uint32(18).string(m.log);
      if (m.events != null && m.events.length) {
        for (var i = 0; i < m.events.length; ++i)
          $root.tendermint.abci.types.Event.encode(m.events[i], w.uint32(26).fork()).ldelim();
      }
      return w;
    };
    Result.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    Result.decode = function decode(r, l) {
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
        m = new $root.cosmos.Result();
      while (r.pos < c) {
        var t = r.uint32();
        switch (t >>> 3) {
          case 1:
            m.data = r.bytes();
            break;
          case 2:
            m.log = r.string();
            break;
          case 3:
            if (!(m.events && m.events.length)) m.events = [];
            m.events.push($root.tendermint.abci.types.Event.decode(r, r.uint32()));
            break;
          default:
            r.skipType(t & 7);
            break;
        }
      }
      return m;
    };
    Result.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    return Result;
  })();
  cosmos.SimulationResponse = (function () {
    function SimulationResponse(p) {
      if (p)
        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
    }
    SimulationResponse.prototype.gasInfo = null;
    SimulationResponse.prototype.result = null;
    SimulationResponse.create = function create(properties) {
      return new SimulationResponse(properties);
    };
    SimulationResponse.encode = function encode(m, w) {
      if (!w) w = $Writer.create();
      if (m.gasInfo != null && Object.hasOwnProperty.call(m, "gasInfo"))
        $root.cosmos.GasInfo.encode(m.gasInfo, w.uint32(10).fork()).ldelim();
      if (m.result != null && Object.hasOwnProperty.call(m, "result"))
        $root.cosmos.Result.encode(m.result, w.uint32(18).fork()).ldelim();
      return w;
    };
    SimulationResponse.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    SimulationResponse.decode = function decode(r, l) {
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
        m = new $root.cosmos.SimulationResponse();
      while (r.pos < c) {
        var t = r.uint32();
        switch (t >>> 3) {
          case 1:
            m.gasInfo = $root.cosmos.GasInfo.decode(r, r.uint32());
            break;
          case 2:
            m.result = $root.cosmos.Result.decode(r, r.uint32());
            break;
          default:
            r.skipType(t & 7);
            break;
        }
      }
      return m;
    };
    SimulationResponse.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    return SimulationResponse;
  })();
  cosmos.MsgData = (function () {
    function MsgData(p) {
      if (p)
        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
    }
    MsgData.prototype.msgType = "";
    MsgData.prototype.data = $util.newBuffer([]);
    MsgData.create = function create(properties) {
      return new MsgData(properties);
    };
    MsgData.encode = function encode(m, w) {
      if (!w) w = $Writer.create();
      if (m.msgType != null && Object.hasOwnProperty.call(m, "msgType")) w.uint32(10).string(m.msgType);
      if (m.data != null && Object.hasOwnProperty.call(m, "data")) w.uint32(18).bytes(m.data);
      return w;
    };
    MsgData.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    MsgData.decode = function decode(r, l) {
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
        m = new $root.cosmos.MsgData();
      while (r.pos < c) {
        var t = r.uint32();
        switch (t >>> 3) {
          case 1:
            m.msgType = r.string();
            break;
          case 2:
            m.data = r.bytes();
            break;
          default:
            r.skipType(t & 7);
            break;
        }
      }
      return m;
    };
    MsgData.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    return MsgData;
  })();
  cosmos.TxData = (function () {
    function TxData(p) {
      this.data = [];
      if (p)
        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
    }
    TxData.prototype.data = $util.emptyArray;
    TxData.create = function create(properties) {
      return new TxData(properties);
    };
    TxData.encode = function encode(m, w) {
      if (!w) w = $Writer.create();
      if (m.data != null && m.data.length) {
        for (var i = 0; i < m.data.length; ++i)
          $root.cosmos.MsgData.encode(m.data[i], w.uint32(10).fork()).ldelim();
      }
      return w;
    };
    TxData.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    TxData.decode = function decode(r, l) {
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
        m = new $root.cosmos.TxData();
      while (r.pos < c) {
        var t = r.uint32();
        switch (t >>> 3) {
          case 1:
            if (!(m.data && m.data.length)) m.data = [];
            m.data.push($root.cosmos.MsgData.decode(r, r.uint32()));
            break;
          default:
            r.skipType(t & 7);
            break;
        }
      }
      return m;
    };
    TxData.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    return TxData;
  })();
  cosmos.bank = (function () {
    var bank = {};
    bank.MsgSend = (function () {
      function MsgSend(p) {
        this.amount = [];
        if (p)
          for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      MsgSend.prototype.fromAddress = $util.newBuffer([]);
      MsgSend.prototype.toAddress = $util.newBuffer([]);
      MsgSend.prototype.amount = $util.emptyArray;
      MsgSend.create = function create(properties) {
        return new MsgSend(properties);
      };
      MsgSend.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.fromAddress != null && Object.hasOwnProperty.call(m, "fromAddress"))
          w.uint32(10).bytes(m.fromAddress);
        if (m.toAddress != null && Object.hasOwnProperty.call(m, "toAddress"))
          w.uint32(18).bytes(m.toAddress);
        if (m.amount != null && m.amount.length) {
          for (var i = 0; i < m.amount.length; ++i)
            $root.cosmos.Coin.encode(m.amount[i], w.uint32(26).fork()).ldelim();
        }
        return w;
      };
      MsgSend.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      MsgSend.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l,
          m = new $root.cosmos.bank.MsgSend();
        while (r.pos < c) {
          var t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.fromAddress = r.bytes();
              break;
            case 2:
              m.toAddress = r.bytes();
              break;
            case 3:
              if (!(m.amount && m.amount.length)) m.amount = [];
              m.amount.push($root.cosmos.Coin.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      MsgSend.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      return MsgSend;
    })();
    bank.Input = (function () {
      function Input(p) {
        this.coins = [];
        if (p)
          for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Input.prototype.address = $util.newBuffer([]);
      Input.prototype.coins = $util.emptyArray;
      Input.create = function create(properties) {
        return new Input(properties);
      };
      Input.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.address != null && Object.hasOwnProperty.call(m, "address")) w.uint32(10).bytes(m.address);
        if (m.coins != null && m.coins.length) {
          for (var i = 0; i < m.coins.length; ++i)
            $root.cosmos.Coin.encode(m.coins[i], w.uint32(18).fork()).ldelim();
        }
        return w;
      };
      Input.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      Input.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l,
          m = new $root.cosmos.bank.Input();
        while (r.pos < c) {
          var t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.address = r.bytes();
              break;
            case 2:
              if (!(m.coins && m.coins.length)) m.coins = [];
              m.coins.push($root.cosmos.Coin.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      Input.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      return Input;
    })();
    bank.Output = (function () {
      function Output(p) {
        this.coins = [];
        if (p)
          for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Output.prototype.address = $util.newBuffer([]);
      Output.prototype.coins = $util.emptyArray;
      Output.create = function create(properties) {
        return new Output(properties);
      };
      Output.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.address != null && Object.hasOwnProperty.call(m, "address")) w.uint32(10).bytes(m.address);
        if (m.coins != null && m.coins.length) {
          for (var i = 0; i < m.coins.length; ++i)
            $root.cosmos.Coin.encode(m.coins[i], w.uint32(18).fork()).ldelim();
        }
        return w;
      };
      Output.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      Output.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l,
          m = new $root.cosmos.bank.Output();
        while (r.pos < c) {
          var t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.address = r.bytes();
              break;
            case 2:
              if (!(m.coins && m.coins.length)) m.coins = [];
              m.coins.push($root.cosmos.Coin.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      Output.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      return Output;
    })();
    bank.MsgMultiSend = (function () {
      function MsgMultiSend(p) {
        this.inputs = [];
        this.outputs = [];
        if (p)
          for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      MsgMultiSend.prototype.inputs = $util.emptyArray;
      MsgMultiSend.prototype.outputs = $util.emptyArray;
      MsgMultiSend.create = function create(properties) {
        return new MsgMultiSend(properties);
      };
      MsgMultiSend.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.inputs != null && m.inputs.length) {
          for (var i = 0; i < m.inputs.length; ++i)
            $root.cosmos.bank.Input.encode(m.inputs[i], w.uint32(10).fork()).ldelim();
        }
        if (m.outputs != null && m.outputs.length) {
          for (var i = 0; i < m.outputs.length; ++i)
            $root.cosmos.bank.Output.encode(m.outputs[i], w.uint32(18).fork()).ldelim();
        }
        return w;
      };
      MsgMultiSend.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      MsgMultiSend.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l,
          m = new $root.cosmos.bank.MsgMultiSend();
        while (r.pos < c) {
          var t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.inputs && m.inputs.length)) m.inputs = [];
              m.inputs.push($root.cosmos.bank.Input.decode(r, r.uint32()));
              break;
            case 2:
              if (!(m.outputs && m.outputs.length)) m.outputs = [];
              m.outputs.push($root.cosmos.bank.Output.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      MsgMultiSend.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      return MsgMultiSend;
    })();
    bank.Supply = (function () {
      function Supply(p) {
        this.total = [];
        if (p)
          for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Supply.prototype.total = $util.emptyArray;
      Supply.create = function create(properties) {
        return new Supply(properties);
      };
      Supply.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.total != null && m.total.length) {
          for (var i = 0; i < m.total.length; ++i)
            $root.cosmos.Coin.encode(m.total[i], w.uint32(10).fork()).ldelim();
        }
        return w;
      };
      Supply.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      Supply.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l,
          m = new $root.cosmos.bank.Supply();
        while (r.pos < c) {
          var t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.total && m.total.length)) m.total = [];
              m.total.push($root.cosmos.Coin.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      Supply.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      return Supply;
    })();
    return bank;
  })();
  cosmos.crypto = (function () {
    var crypto = {};
    crypto.PublicKey = (function () {
      function PublicKey(p) {
        if (p)
          for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      PublicKey.prototype.secp256k1 = $util.newBuffer([]);
      PublicKey.prototype.ed25519 = $util.newBuffer([]);
      PublicKey.prototype.sr25519 = $util.newBuffer([]);
      PublicKey.prototype.multisig = null;
      PublicKey.prototype.secp256r1 = $util.newBuffer([]);
      PublicKey.prototype.anyPubkey = null;
      var $oneOfFields;
      Object.defineProperty(PublicKey.prototype, "sum", {
        get: $util.oneOfGetter(
          ($oneOfFields = ["secp256k1", "ed25519", "sr25519", "multisig", "secp256r1", "anyPubkey"]),
        ),
        set: $util.oneOfSetter($oneOfFields),
      });
      PublicKey.create = function create(properties) {
        return new PublicKey(properties);
      };
      PublicKey.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.secp256k1 != null && Object.hasOwnProperty.call(m, "secp256k1"))
          w.uint32(10).bytes(m.secp256k1);
        if (m.ed25519 != null && Object.hasOwnProperty.call(m, "ed25519")) w.uint32(18).bytes(m.ed25519);
        if (m.sr25519 != null && Object.hasOwnProperty.call(m, "sr25519")) w.uint32(26).bytes(m.sr25519);
        if (m.multisig != null && Object.hasOwnProperty.call(m, "multisig"))
          $root.cosmos.crypto.PubKeyMultisigThreshold.encode(m.multisig, w.uint32(34).fork()).ldelim();
        if (m.secp256r1 != null && Object.hasOwnProperty.call(m, "secp256r1"))
          w.uint32(42).bytes(m.secp256r1);
        if (m.anyPubkey != null && Object.hasOwnProperty.call(m, "anyPubkey"))
          $root.google.protobuf.Any.encode(m.anyPubkey, w.uint32(122).fork()).ldelim();
        return w;
      };
      PublicKey.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      PublicKey.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l,
          m = new $root.cosmos.crypto.PublicKey();
        while (r.pos < c) {
          var t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.secp256k1 = r.bytes();
              break;
            case 2:
              m.ed25519 = r.bytes();
              break;
            case 3:
              m.sr25519 = r.bytes();
              break;
            case 4:
              m.multisig = $root.cosmos.crypto.PubKeyMultisigThreshold.decode(r, r.uint32());
              break;
            case 5:
              m.secp256r1 = r.bytes();
              break;
            case 15:
              m.anyPubkey = $root.google.protobuf.Any.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      PublicKey.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      return PublicKey;
    })();
    crypto.PubKeyMultisigThreshold = (function () {
      function PubKeyMultisigThreshold(p) {
        this.publicKeys = [];
        if (p)
          for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      PubKeyMultisigThreshold.prototype.threshold = 0;
      PubKeyMultisigThreshold.prototype.publicKeys = $util.emptyArray;
      PubKeyMultisigThreshold.create = function create(properties) {
        return new PubKeyMultisigThreshold(properties);
      };
      PubKeyMultisigThreshold.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.threshold != null && Object.hasOwnProperty.call(m, "threshold"))
          w.uint32(8).uint32(m.threshold);
        if (m.publicKeys != null && m.publicKeys.length) {
          for (var i = 0; i < m.publicKeys.length; ++i)
            $root.cosmos.crypto.PublicKey.encode(m.publicKeys[i], w.uint32(18).fork()).ldelim();
        }
        return w;
      };
      PubKeyMultisigThreshold.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      PubKeyMultisigThreshold.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l,
          m = new $root.cosmos.crypto.PubKeyMultisigThreshold();
        while (r.pos < c) {
          var t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.threshold = r.uint32();
              break;
            case 2:
              if (!(m.publicKeys && m.publicKeys.length)) m.publicKeys = [];
              m.publicKeys.push($root.cosmos.crypto.PublicKey.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      PubKeyMultisigThreshold.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      return PubKeyMultisigThreshold;
    })();
    crypto.MultiSignature = (function () {
      function MultiSignature(p) {
        this.signatures = [];
        if (p)
          for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      MultiSignature.prototype.signatures = $util.emptyArray;
      MultiSignature.create = function create(properties) {
        return new MultiSignature(properties);
      };
      MultiSignature.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.signatures != null && m.signatures.length) {
          for (var i = 0; i < m.signatures.length; ++i) w.uint32(10).bytes(m.signatures[i]);
        }
        return w;
      };
      MultiSignature.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      MultiSignature.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l,
          m = new $root.cosmos.crypto.MultiSignature();
        while (r.pos < c) {
          var t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.signatures && m.signatures.length)) m.signatures = [];
              m.signatures.push(r.bytes());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      MultiSignature.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      return MultiSignature;
    })();
    crypto.CompactBitArray = (function () {
      function CompactBitArray(p) {
        if (p)
          for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CompactBitArray.prototype.extraBitsStored = 0;
      CompactBitArray.prototype.elems = $util.newBuffer([]);
      CompactBitArray.create = function create(properties) {
        return new CompactBitArray(properties);
      };
      CompactBitArray.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.extraBitsStored != null && Object.hasOwnProperty.call(m, "extraBitsStored"))
          w.uint32(8).uint32(m.extraBitsStored);
        if (m.elems != null && Object.hasOwnProperty.call(m, "elems")) w.uint32(18).bytes(m.elems);
        return w;
      };
      CompactBitArray.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      CompactBitArray.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l,
          m = new $root.cosmos.crypto.CompactBitArray();
        while (r.pos < c) {
          var t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.extraBitsStored = r.uint32();
              break;
            case 2:
              m.elems = r.bytes();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      CompactBitArray.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      return CompactBitArray;
    })();
    return crypto;
  })();
  cosmos.tx = (function () {
    var tx = {};
    tx.Tx = (function () {
      function Tx(p) {
        this.signatures = [];
        if (p)
          for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Tx.prototype.body = null;
      Tx.prototype.authInfo = null;
      Tx.prototype.signatures = $util.emptyArray;
      Tx.create = function create(properties) {
        return new Tx(properties);
      };
      Tx.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.body != null && Object.hasOwnProperty.call(m, "body"))
          $root.cosmos.tx.TxBody.encode(m.body, w.uint32(10).fork()).ldelim();
        if (m.authInfo != null && Object.hasOwnProperty.call(m, "authInfo"))
          $root.cosmos.tx.AuthInfo.encode(m.authInfo, w.uint32(18).fork()).ldelim();
        if (m.signatures != null && m.signatures.length) {
          for (var i = 0; i < m.signatures.length; ++i) w.uint32(26).bytes(m.signatures[i]);
        }
        return w;
      };
      Tx.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      Tx.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l,
          m = new $root.cosmos.tx.Tx();
        while (r.pos < c) {
          var t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.body = $root.cosmos.tx.TxBody.decode(r, r.uint32());
              break;
            case 2:
              m.authInfo = $root.cosmos.tx.AuthInfo.decode(r, r.uint32());
              break;
            case 3:
              if (!(m.signatures && m.signatures.length)) m.signatures = [];
              m.signatures.push(r.bytes());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      Tx.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      return Tx;
    })();
    tx.SignDoc = (function () {
      function SignDoc(p) {
        if (p)
          for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      SignDoc.prototype.body = null;
      SignDoc.prototype.authInfo = null;
      SignDoc.prototype.chainId = "";
      SignDoc.prototype.accountNumber = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
      SignDoc.prototype.accountSequence = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
      SignDoc.create = function create(properties) {
        return new SignDoc(properties);
      };
      SignDoc.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.body != null && Object.hasOwnProperty.call(m, "body"))
          $root.cosmos.tx.TxBody.encode(m.body, w.uint32(10).fork()).ldelim();
        if (m.authInfo != null && Object.hasOwnProperty.call(m, "authInfo"))
          $root.cosmos.tx.AuthInfo.encode(m.authInfo, w.uint32(18).fork()).ldelim();
        if (m.chainId != null && Object.hasOwnProperty.call(m, "chainId")) w.uint32(26).string(m.chainId);
        if (m.accountNumber != null && Object.hasOwnProperty.call(m, "accountNumber"))
          w.uint32(32).uint64(m.accountNumber);
        if (m.accountSequence != null && Object.hasOwnProperty.call(m, "accountSequence"))
          w.uint32(40).uint64(m.accountSequence);
        return w;
      };
      SignDoc.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      SignDoc.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l,
          m = new $root.cosmos.tx.SignDoc();
        while (r.pos < c) {
          var t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.body = $root.cosmos.tx.TxBody.decode(r, r.uint32());
              break;
            case 2:
              m.authInfo = $root.cosmos.tx.AuthInfo.decode(r, r.uint32());
              break;
            case 3:
              m.chainId = r.string();
              break;
            case 4:
              m.accountNumber = r.uint64();
              break;
            case 5:
              m.accountSequence = r.uint64();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      SignDoc.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      return SignDoc;
    })();
    tx.TxBody = (function () {
      function TxBody(p) {
        this.messages = [];
        this.extensionOptions = [];
        this.nonCriticalExtensionOptions = [];
        if (p)
          for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      TxBody.prototype.messages = $util.emptyArray;
      TxBody.prototype.memo = "";
      TxBody.prototype.timeoutHeight = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      TxBody.prototype.extensionOptions = $util.emptyArray;
      TxBody.prototype.nonCriticalExtensionOptions = $util.emptyArray;
      TxBody.create = function create(properties) {
        return new TxBody(properties);
      };
      TxBody.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.messages != null && m.messages.length) {
          for (var i = 0; i < m.messages.length; ++i)
            $root.google.protobuf.Any.encode(m.messages[i], w.uint32(10).fork()).ldelim();
        }
        if (m.memo != null && Object.hasOwnProperty.call(m, "memo")) w.uint32(18).string(m.memo);
        if (m.timeoutHeight != null && Object.hasOwnProperty.call(m, "timeoutHeight"))
          w.uint32(24).int64(m.timeoutHeight);
        if (m.extensionOptions != null && m.extensionOptions.length) {
          for (var i = 0; i < m.extensionOptions.length; ++i)
            $root.google.protobuf.Any.encode(m.extensionOptions[i], w.uint32(8186).fork()).ldelim();
        }
        if (m.nonCriticalExtensionOptions != null && m.nonCriticalExtensionOptions.length) {
          for (var i = 0; i < m.nonCriticalExtensionOptions.length; ++i)
            $root.google.protobuf.Any.encode(
              m.nonCriticalExtensionOptions[i],
              w.uint32(16378).fork(),
            ).ldelim();
        }
        return w;
      };
      TxBody.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      TxBody.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l,
          m = new $root.cosmos.tx.TxBody();
        while (r.pos < c) {
          var t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.messages && m.messages.length)) m.messages = [];
              m.messages.push($root.google.protobuf.Any.decode(r, r.uint32()));
              break;
            case 2:
              m.memo = r.string();
              break;
            case 3:
              m.timeoutHeight = r.int64();
              break;
            case 1023:
              if (!(m.extensionOptions && m.extensionOptions.length)) m.extensionOptions = [];
              m.extensionOptions.push($root.google.protobuf.Any.decode(r, r.uint32()));
              break;
            case 2047:
              if (!(m.nonCriticalExtensionOptions && m.nonCriticalExtensionOptions.length))
                m.nonCriticalExtensionOptions = [];
              m.nonCriticalExtensionOptions.push($root.google.protobuf.Any.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      TxBody.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      return TxBody;
    })();
    tx.AuthInfo = (function () {
      function AuthInfo(p) {
        this.signerInfos = [];
        if (p)
          for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      AuthInfo.prototype.signerInfos = $util.emptyArray;
      AuthInfo.prototype.fee = null;
      AuthInfo.create = function create(properties) {
        return new AuthInfo(properties);
      };
      AuthInfo.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.signerInfos != null && m.signerInfos.length) {
          for (var i = 0; i < m.signerInfos.length; ++i)
            $root.cosmos.tx.SignerInfo.encode(m.signerInfos[i], w.uint32(10).fork()).ldelim();
        }
        if (m.fee != null && Object.hasOwnProperty.call(m, "fee"))
          $root.cosmos.tx.Fee.encode(m.fee, w.uint32(18).fork()).ldelim();
        return w;
      };
      AuthInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      AuthInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l,
          m = new $root.cosmos.tx.AuthInfo();
        while (r.pos < c) {
          var t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.signerInfos && m.signerInfos.length)) m.signerInfos = [];
              m.signerInfos.push($root.cosmos.tx.SignerInfo.decode(r, r.uint32()));
              break;
            case 2:
              m.fee = $root.cosmos.tx.Fee.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      AuthInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      return AuthInfo;
    })();
    tx.SignerInfo = (function () {
      function SignerInfo(p) {
        if (p)
          for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      SignerInfo.prototype.publicKey = null;
      SignerInfo.prototype.modeInfo = null;
      SignerInfo.create = function create(properties) {
        return new SignerInfo(properties);
      };
      SignerInfo.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.publicKey != null && Object.hasOwnProperty.call(m, "publicKey"))
          $root.google.protobuf.Any.encode(m.publicKey, w.uint32(10).fork()).ldelim();
        if (m.modeInfo != null && Object.hasOwnProperty.call(m, "modeInfo"))
          $root.cosmos.tx.ModeInfo.encode(m.modeInfo, w.uint32(18).fork()).ldelim();
        return w;
      };
      SignerInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      SignerInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l,
          m = new $root.cosmos.tx.SignerInfo();
        while (r.pos < c) {
          var t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.publicKey = $root.google.protobuf.Any.decode(r, r.uint32());
              break;
            case 2:
              m.modeInfo = $root.cosmos.tx.ModeInfo.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      SignerInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      return SignerInfo;
    })();
    tx.ModeInfo = (function () {
      function ModeInfo(p) {
        if (p)
          for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ModeInfo.prototype.single = null;
      ModeInfo.prototype.multi = null;
      var $oneOfFields;
      Object.defineProperty(ModeInfo.prototype, "sum", {
        get: $util.oneOfGetter(($oneOfFields = ["single", "multi"])),
        set: $util.oneOfSetter($oneOfFields),
      });
      ModeInfo.create = function create(properties) {
        return new ModeInfo(properties);
      };
      ModeInfo.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.single != null && Object.hasOwnProperty.call(m, "single"))
          $root.cosmos.tx.ModeInfo.Single.encode(m.single, w.uint32(10).fork()).ldelim();
        if (m.multi != null && Object.hasOwnProperty.call(m, "multi"))
          $root.cosmos.tx.ModeInfo.Multi.encode(m.multi, w.uint32(18).fork()).ldelim();
        return w;
      };
      ModeInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      ModeInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l,
          m = new $root.cosmos.tx.ModeInfo();
        while (r.pos < c) {
          var t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.single = $root.cosmos.tx.ModeInfo.Single.decode(r, r.uint32());
              break;
            case 2:
              m.multi = $root.cosmos.tx.ModeInfo.Multi.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      ModeInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      ModeInfo.Single = (function () {
        function Single(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        Single.prototype.mode = 0;
        Single.create = function create(properties) {
          return new Single(properties);
        };
        Single.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.mode != null && Object.hasOwnProperty.call(m, "mode")) w.uint32(8).int32(m.mode);
          return w;
        };
        Single.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        Single.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.cosmos.tx.ModeInfo.Single();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.mode = r.int32();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        Single.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        return Single;
      })();
      ModeInfo.Multi = (function () {
        function Multi(p) {
          this.modeInfos = [];
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        Multi.prototype.bitarray = null;
        Multi.prototype.modeInfos = $util.emptyArray;
        Multi.create = function create(properties) {
          return new Multi(properties);
        };
        Multi.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.bitarray != null && Object.hasOwnProperty.call(m, "bitarray"))
            $root.cosmos.crypto.CompactBitArray.encode(m.bitarray, w.uint32(10).fork()).ldelim();
          if (m.modeInfos != null && m.modeInfos.length) {
            for (var i = 0; i < m.modeInfos.length; ++i)
              $root.cosmos.tx.ModeInfo.encode(m.modeInfos[i], w.uint32(18).fork()).ldelim();
          }
          return w;
        };
        Multi.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        Multi.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.cosmos.tx.ModeInfo.Multi();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.bitarray = $root.cosmos.crypto.CompactBitArray.decode(r, r.uint32());
                break;
              case 2:
                if (!(m.modeInfos && m.modeInfos.length)) m.modeInfos = [];
                m.modeInfos.push($root.cosmos.tx.ModeInfo.decode(r, r.uint32()));
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        Multi.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        return Multi;
      })();
      return ModeInfo;
    })();
    tx.Fee = (function () {
      function Fee(p) {
        this.amount = [];
        if (p)
          for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Fee.prototype.amount = $util.emptyArray;
      Fee.prototype.gasLimit = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
      Fee.create = function create(properties) {
        return new Fee(properties);
      };
      Fee.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.amount != null && m.amount.length) {
          for (var i = 0; i < m.amount.length; ++i)
            $root.cosmos.Coin.encode(m.amount[i], w.uint32(10).fork()).ldelim();
        }
        if (m.gasLimit != null && Object.hasOwnProperty.call(m, "gasLimit")) w.uint32(16).uint64(m.gasLimit);
        return w;
      };
      Fee.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      Fee.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l,
          m = new $root.cosmos.tx.Fee();
        while (r.pos < c) {
          var t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.amount && m.amount.length)) m.amount = [];
              m.amount.push($root.cosmos.Coin.decode(r, r.uint32()));
              break;
            case 2:
              m.gasLimit = r.uint64();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      Fee.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      return Fee;
    })();
    tx.signing = (function () {
      var signing = {};
      signing.SignMode = (function () {
        var valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = "SIGN_MODE_UNSPECIFIED")] = 0;
        values[(valuesById[1] = "SIGN_MODE_DIRECT")] = 1;
        values[(valuesById[2] = "SIGN_MODE_TEXTUAL")] = 2;
        values[(valuesById[127] = "SIGN_MODE_LEGACY_AMINO_JSON")] = 127;
        return values;
      })();
      return signing;
    })();
    return tx;
  })();
  return cosmos;
})();
$root.tendermint = (function () {
  var tendermint = {};
  tendermint.abci = (function () {
    var abci = {};
    abci.types = (function () {
      var types = {};
      types.Request = (function () {
        function Request(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        Request.prototype.echo = null;
        Request.prototype.flush = null;
        Request.prototype.info = null;
        Request.prototype.setOption = null;
        Request.prototype.initChain = null;
        Request.prototype.query = null;
        Request.prototype.beginBlock = null;
        Request.prototype.checkTx = null;
        Request.prototype.deliverTx = null;
        Request.prototype.endBlock = null;
        Request.prototype.commit = null;
        var $oneOfFields;
        Object.defineProperty(Request.prototype, "value", {
          get: $util.oneOfGetter(
            ($oneOfFields = [
              "echo",
              "flush",
              "info",
              "setOption",
              "initChain",
              "query",
              "beginBlock",
              "checkTx",
              "deliverTx",
              "endBlock",
              "commit",
            ]),
          ),
          set: $util.oneOfSetter($oneOfFields),
        });
        Request.create = function create(properties) {
          return new Request(properties);
        };
        Request.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.echo != null && Object.hasOwnProperty.call(m, "echo"))
            $root.tendermint.abci.types.RequestEcho.encode(m.echo, w.uint32(18).fork()).ldelim();
          if (m.flush != null && Object.hasOwnProperty.call(m, "flush"))
            $root.tendermint.abci.types.RequestFlush.encode(m.flush, w.uint32(26).fork()).ldelim();
          if (m.info != null && Object.hasOwnProperty.call(m, "info"))
            $root.tendermint.abci.types.RequestInfo.encode(m.info, w.uint32(34).fork()).ldelim();
          if (m.setOption != null && Object.hasOwnProperty.call(m, "setOption"))
            $root.tendermint.abci.types.RequestSetOption.encode(m.setOption, w.uint32(42).fork()).ldelim();
          if (m.initChain != null && Object.hasOwnProperty.call(m, "initChain"))
            $root.tendermint.abci.types.RequestInitChain.encode(m.initChain, w.uint32(50).fork()).ldelim();
          if (m.query != null && Object.hasOwnProperty.call(m, "query"))
            $root.tendermint.abci.types.RequestQuery.encode(m.query, w.uint32(58).fork()).ldelim();
          if (m.beginBlock != null && Object.hasOwnProperty.call(m, "beginBlock"))
            $root.tendermint.abci.types.RequestBeginBlock.encode(m.beginBlock, w.uint32(66).fork()).ldelim();
          if (m.checkTx != null && Object.hasOwnProperty.call(m, "checkTx"))
            $root.tendermint.abci.types.RequestCheckTx.encode(m.checkTx, w.uint32(74).fork()).ldelim();
          if (m.endBlock != null && Object.hasOwnProperty.call(m, "endBlock"))
            $root.tendermint.abci.types.RequestEndBlock.encode(m.endBlock, w.uint32(90).fork()).ldelim();
          if (m.commit != null && Object.hasOwnProperty.call(m, "commit"))
            $root.tendermint.abci.types.RequestCommit.encode(m.commit, w.uint32(98).fork()).ldelim();
          if (m.deliverTx != null && Object.hasOwnProperty.call(m, "deliverTx"))
            $root.tendermint.abci.types.RequestDeliverTx.encode(m.deliverTx, w.uint32(154).fork()).ldelim();
          return w;
        };
        Request.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        Request.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.tendermint.abci.types.Request();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 2:
                m.echo = $root.tendermint.abci.types.RequestEcho.decode(r, r.uint32());
                break;
              case 3:
                m.flush = $root.tendermint.abci.types.RequestFlush.decode(r, r.uint32());
                break;
              case 4:
                m.info = $root.tendermint.abci.types.RequestInfo.decode(r, r.uint32());
                break;
              case 5:
                m.setOption = $root.tendermint.abci.types.RequestSetOption.decode(r, r.uint32());
                break;
              case 6:
                m.initChain = $root.tendermint.abci.types.RequestInitChain.decode(r, r.uint32());
                break;
              case 7:
                m.query = $root.tendermint.abci.types.RequestQuery.decode(r, r.uint32());
                break;
              case 8:
                m.beginBlock = $root.tendermint.abci.types.RequestBeginBlock.decode(r, r.uint32());
                break;
              case 9:
                m.checkTx = $root.tendermint.abci.types.RequestCheckTx.decode(r, r.uint32());
                break;
              case 19:
                m.deliverTx = $root.tendermint.abci.types.RequestDeliverTx.decode(r, r.uint32());
                break;
              case 11:
                m.endBlock = $root.tendermint.abci.types.RequestEndBlock.decode(r, r.uint32());
                break;
              case 12:
                m.commit = $root.tendermint.abci.types.RequestCommit.decode(r, r.uint32());
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        Request.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        return Request;
      })();
      types.RequestEcho = (function () {
        function RequestEcho(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        RequestEcho.prototype.message = "";
        RequestEcho.create = function create(properties) {
          return new RequestEcho(properties);
        };
        RequestEcho.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.message != null && Object.hasOwnProperty.call(m, "message")) w.uint32(10).string(m.message);
          return w;
        };
        RequestEcho.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        RequestEcho.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.tendermint.abci.types.RequestEcho();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.message = r.string();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        RequestEcho.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        return RequestEcho;
      })();
      types.RequestFlush = (function () {
        function RequestFlush(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        RequestFlush.create = function create(properties) {
          return new RequestFlush(properties);
        };
        RequestFlush.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          return w;
        };
        RequestFlush.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        RequestFlush.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.tendermint.abci.types.RequestFlush();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        RequestFlush.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        return RequestFlush;
      })();
      types.RequestInfo = (function () {
        function RequestInfo(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        RequestInfo.prototype.version = "";
        RequestInfo.prototype.blockVersion = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
        RequestInfo.prototype.p2pVersion = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
        RequestInfo.create = function create(properties) {
          return new RequestInfo(properties);
        };
        RequestInfo.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.version != null && Object.hasOwnProperty.call(m, "version")) w.uint32(10).string(m.version);
          if (m.blockVersion != null && Object.hasOwnProperty.call(m, "blockVersion"))
            w.uint32(16).uint64(m.blockVersion);
          if (m.p2pVersion != null && Object.hasOwnProperty.call(m, "p2pVersion"))
            w.uint32(24).uint64(m.p2pVersion);
          return w;
        };
        RequestInfo.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        RequestInfo.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.tendermint.abci.types.RequestInfo();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.version = r.string();
                break;
              case 2:
                m.blockVersion = r.uint64();
                break;
              case 3:
                m.p2pVersion = r.uint64();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        RequestInfo.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        return RequestInfo;
      })();
      types.RequestSetOption = (function () {
        function RequestSetOption(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        RequestSetOption.prototype.key = "";
        RequestSetOption.prototype.value = "";
        RequestSetOption.create = function create(properties) {
          return new RequestSetOption(properties);
        };
        RequestSetOption.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.key != null && Object.hasOwnProperty.call(m, "key")) w.uint32(10).string(m.key);
          if (m.value != null && Object.hasOwnProperty.call(m, "value")) w.uint32(18).string(m.value);
          return w;
        };
        RequestSetOption.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        RequestSetOption.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.tendermint.abci.types.RequestSetOption();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.key = r.string();
                break;
              case 2:
                m.value = r.string();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        RequestSetOption.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        return RequestSetOption;
      })();
      types.RequestInitChain = (function () {
        function RequestInitChain(p) {
          this.validators = [];
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        RequestInitChain.prototype.time = null;
        RequestInitChain.prototype.chainId = "";
        RequestInitChain.prototype.consensusParams = null;
        RequestInitChain.prototype.validators = $util.emptyArray;
        RequestInitChain.prototype.appStateBytes = $util.newBuffer([]);
        RequestInitChain.create = function create(properties) {
          return new RequestInitChain(properties);
        };
        RequestInitChain.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.time != null && Object.hasOwnProperty.call(m, "time"))
            $root.google.protobuf.Timestamp.encode(m.time, w.uint32(10).fork()).ldelim();
          if (m.chainId != null && Object.hasOwnProperty.call(m, "chainId")) w.uint32(18).string(m.chainId);
          if (m.consensusParams != null && Object.hasOwnProperty.call(m, "consensusParams"))
            $root.tendermint.abci.types.ConsensusParams.encode(
              m.consensusParams,
              w.uint32(26).fork(),
            ).ldelim();
          if (m.validators != null && m.validators.length) {
            for (var i = 0; i < m.validators.length; ++i)
              $root.tendermint.abci.types.ValidatorUpdate.encode(
                m.validators[i],
                w.uint32(34).fork(),
              ).ldelim();
          }
          if (m.appStateBytes != null && Object.hasOwnProperty.call(m, "appStateBytes"))
            w.uint32(42).bytes(m.appStateBytes);
          return w;
        };
        RequestInitChain.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        RequestInitChain.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.tendermint.abci.types.RequestInitChain();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.time = $root.google.protobuf.Timestamp.decode(r, r.uint32());
                break;
              case 2:
                m.chainId = r.string();
                break;
              case 3:
                m.consensusParams = $root.tendermint.abci.types.ConsensusParams.decode(r, r.uint32());
                break;
              case 4:
                if (!(m.validators && m.validators.length)) m.validators = [];
                m.validators.push($root.tendermint.abci.types.ValidatorUpdate.decode(r, r.uint32()));
                break;
              case 5:
                m.appStateBytes = r.bytes();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        RequestInitChain.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        return RequestInitChain;
      })();
      types.RequestQuery = (function () {
        function RequestQuery(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        RequestQuery.prototype.data = $util.newBuffer([]);
        RequestQuery.prototype.path = "";
        RequestQuery.prototype.height = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        RequestQuery.prototype.prove = false;
        RequestQuery.create = function create(properties) {
          return new RequestQuery(properties);
        };
        RequestQuery.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.data != null && Object.hasOwnProperty.call(m, "data")) w.uint32(10).bytes(m.data);
          if (m.path != null && Object.hasOwnProperty.call(m, "path")) w.uint32(18).string(m.path);
          if (m.height != null && Object.hasOwnProperty.call(m, "height")) w.uint32(24).int64(m.height);
          if (m.prove != null && Object.hasOwnProperty.call(m, "prove")) w.uint32(32).bool(m.prove);
          return w;
        };
        RequestQuery.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        RequestQuery.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.tendermint.abci.types.RequestQuery();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.data = r.bytes();
                break;
              case 2:
                m.path = r.string();
                break;
              case 3:
                m.height = r.int64();
                break;
              case 4:
                m.prove = r.bool();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        RequestQuery.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        return RequestQuery;
      })();
      types.RequestBeginBlock = (function () {
        function RequestBeginBlock(p) {
          this.byzantineValidators = [];
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        RequestBeginBlock.prototype.hash = $util.newBuffer([]);
        RequestBeginBlock.prototype.header = null;
        RequestBeginBlock.prototype.lastCommitInfo = null;
        RequestBeginBlock.prototype.byzantineValidators = $util.emptyArray;
        RequestBeginBlock.create = function create(properties) {
          return new RequestBeginBlock(properties);
        };
        RequestBeginBlock.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.hash != null && Object.hasOwnProperty.call(m, "hash")) w.uint32(10).bytes(m.hash);
          if (m.header != null && Object.hasOwnProperty.call(m, "header"))
            $root.tendermint.abci.types.Header.encode(m.header, w.uint32(18).fork()).ldelim();
          if (m.lastCommitInfo != null && Object.hasOwnProperty.call(m, "lastCommitInfo"))
            $root.tendermint.abci.types.LastCommitInfo.encode(m.lastCommitInfo, w.uint32(26).fork()).ldelim();
          if (m.byzantineValidators != null && m.byzantineValidators.length) {
            for (var i = 0; i < m.byzantineValidators.length; ++i)
              $root.tendermint.abci.types.Evidence.encode(
                m.byzantineValidators[i],
                w.uint32(34).fork(),
              ).ldelim();
          }
          return w;
        };
        RequestBeginBlock.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        RequestBeginBlock.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.tendermint.abci.types.RequestBeginBlock();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.hash = r.bytes();
                break;
              case 2:
                m.header = $root.tendermint.abci.types.Header.decode(r, r.uint32());
                break;
              case 3:
                m.lastCommitInfo = $root.tendermint.abci.types.LastCommitInfo.decode(r, r.uint32());
                break;
              case 4:
                if (!(m.byzantineValidators && m.byzantineValidators.length)) m.byzantineValidators = [];
                m.byzantineValidators.push($root.tendermint.abci.types.Evidence.decode(r, r.uint32()));
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        RequestBeginBlock.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        return RequestBeginBlock;
      })();
      types.CheckTxType = (function () {
        var valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = "New")] = 0;
        values[(valuesById[1] = "Recheck")] = 1;
        return values;
      })();
      types.RequestCheckTx = (function () {
        function RequestCheckTx(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        RequestCheckTx.prototype.tx = $util.newBuffer([]);
        RequestCheckTx.prototype.type = 0;
        RequestCheckTx.create = function create(properties) {
          return new RequestCheckTx(properties);
        };
        RequestCheckTx.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.tx != null && Object.hasOwnProperty.call(m, "tx")) w.uint32(10).bytes(m.tx);
          if (m.type != null && Object.hasOwnProperty.call(m, "type")) w.uint32(16).int32(m.type);
          return w;
        };
        RequestCheckTx.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        RequestCheckTx.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.tendermint.abci.types.RequestCheckTx();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.tx = r.bytes();
                break;
              case 2:
                m.type = r.int32();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        RequestCheckTx.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        return RequestCheckTx;
      })();
      types.RequestDeliverTx = (function () {
        function RequestDeliverTx(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        RequestDeliverTx.prototype.tx = $util.newBuffer([]);
        RequestDeliverTx.create = function create(properties) {
          return new RequestDeliverTx(properties);
        };
        RequestDeliverTx.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.tx != null && Object.hasOwnProperty.call(m, "tx")) w.uint32(10).bytes(m.tx);
          return w;
        };
        RequestDeliverTx.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        RequestDeliverTx.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.tendermint.abci.types.RequestDeliverTx();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.tx = r.bytes();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        RequestDeliverTx.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        return RequestDeliverTx;
      })();
      types.RequestEndBlock = (function () {
        function RequestEndBlock(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        RequestEndBlock.prototype.height = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        RequestEndBlock.create = function create(properties) {
          return new RequestEndBlock(properties);
        };
        RequestEndBlock.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.height != null && Object.hasOwnProperty.call(m, "height")) w.uint32(8).int64(m.height);
          return w;
        };
        RequestEndBlock.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        RequestEndBlock.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.tendermint.abci.types.RequestEndBlock();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.height = r.int64();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        RequestEndBlock.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        return RequestEndBlock;
      })();
      types.RequestCommit = (function () {
        function RequestCommit(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        RequestCommit.create = function create(properties) {
          return new RequestCommit(properties);
        };
        RequestCommit.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          return w;
        };
        RequestCommit.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        RequestCommit.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.tendermint.abci.types.RequestCommit();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        RequestCommit.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        return RequestCommit;
      })();
      types.Response = (function () {
        function Response(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        Response.prototype.exception = null;
        Response.prototype.echo = null;
        Response.prototype.flush = null;
        Response.prototype.info = null;
        Response.prototype.setOption = null;
        Response.prototype.initChain = null;
        Response.prototype.query = null;
        Response.prototype.beginBlock = null;
        Response.prototype.checkTx = null;
        Response.prototype.deliverTx = null;
        Response.prototype.endBlock = null;
        Response.prototype.commit = null;
        var $oneOfFields;
        Object.defineProperty(Response.prototype, "value", {
          get: $util.oneOfGetter(
            ($oneOfFields = [
              "exception",
              "echo",
              "flush",
              "info",
              "setOption",
              "initChain",
              "query",
              "beginBlock",
              "checkTx",
              "deliverTx",
              "endBlock",
              "commit",
            ]),
          ),
          set: $util.oneOfSetter($oneOfFields),
        });
        Response.create = function create(properties) {
          return new Response(properties);
        };
        Response.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.exception != null && Object.hasOwnProperty.call(m, "exception"))
            $root.tendermint.abci.types.ResponseException.encode(m.exception, w.uint32(10).fork()).ldelim();
          if (m.echo != null && Object.hasOwnProperty.call(m, "echo"))
            $root.tendermint.abci.types.ResponseEcho.encode(m.echo, w.uint32(18).fork()).ldelim();
          if (m.flush != null && Object.hasOwnProperty.call(m, "flush"))
            $root.tendermint.abci.types.ResponseFlush.encode(m.flush, w.uint32(26).fork()).ldelim();
          if (m.info != null && Object.hasOwnProperty.call(m, "info"))
            $root.tendermint.abci.types.ResponseInfo.encode(m.info, w.uint32(34).fork()).ldelim();
          if (m.setOption != null && Object.hasOwnProperty.call(m, "setOption"))
            $root.tendermint.abci.types.ResponseSetOption.encode(m.setOption, w.uint32(42).fork()).ldelim();
          if (m.initChain != null && Object.hasOwnProperty.call(m, "initChain"))
            $root.tendermint.abci.types.ResponseInitChain.encode(m.initChain, w.uint32(50).fork()).ldelim();
          if (m.query != null && Object.hasOwnProperty.call(m, "query"))
            $root.tendermint.abci.types.ResponseQuery.encode(m.query, w.uint32(58).fork()).ldelim();
          if (m.beginBlock != null && Object.hasOwnProperty.call(m, "beginBlock"))
            $root.tendermint.abci.types.ResponseBeginBlock.encode(m.beginBlock, w.uint32(66).fork()).ldelim();
          if (m.checkTx != null && Object.hasOwnProperty.call(m, "checkTx"))
            $root.tendermint.abci.types.ResponseCheckTx.encode(m.checkTx, w.uint32(74).fork()).ldelim();
          if (m.deliverTx != null && Object.hasOwnProperty.call(m, "deliverTx"))
            $root.tendermint.abci.types.ResponseDeliverTx.encode(m.deliverTx, w.uint32(82).fork()).ldelim();
          if (m.endBlock != null && Object.hasOwnProperty.call(m, "endBlock"))
            $root.tendermint.abci.types.ResponseEndBlock.encode(m.endBlock, w.uint32(90).fork()).ldelim();
          if (m.commit != null && Object.hasOwnProperty.call(m, "commit"))
            $root.tendermint.abci.types.ResponseCommit.encode(m.commit, w.uint32(98).fork()).ldelim();
          return w;
        };
        Response.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        Response.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.tendermint.abci.types.Response();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.exception = $root.tendermint.abci.types.ResponseException.decode(r, r.uint32());
                break;
              case 2:
                m.echo = $root.tendermint.abci.types.ResponseEcho.decode(r, r.uint32());
                break;
              case 3:
                m.flush = $root.tendermint.abci.types.ResponseFlush.decode(r, r.uint32());
                break;
              case 4:
                m.info = $root.tendermint.abci.types.ResponseInfo.decode(r, r.uint32());
                break;
              case 5:
                m.setOption = $root.tendermint.abci.types.ResponseSetOption.decode(r, r.uint32());
                break;
              case 6:
                m.initChain = $root.tendermint.abci.types.ResponseInitChain.decode(r, r.uint32());
                break;
              case 7:
                m.query = $root.tendermint.abci.types.ResponseQuery.decode(r, r.uint32());
                break;
              case 8:
                m.beginBlock = $root.tendermint.abci.types.ResponseBeginBlock.decode(r, r.uint32());
                break;
              case 9:
                m.checkTx = $root.tendermint.abci.types.ResponseCheckTx.decode(r, r.uint32());
                break;
              case 10:
                m.deliverTx = $root.tendermint.abci.types.ResponseDeliverTx.decode(r, r.uint32());
                break;
              case 11:
                m.endBlock = $root.tendermint.abci.types.ResponseEndBlock.decode(r, r.uint32());
                break;
              case 12:
                m.commit = $root.tendermint.abci.types.ResponseCommit.decode(r, r.uint32());
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        Response.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        return Response;
      })();
      types.ResponseException = (function () {
        function ResponseException(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        ResponseException.prototype.error = "";
        ResponseException.create = function create(properties) {
          return new ResponseException(properties);
        };
        ResponseException.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.error != null && Object.hasOwnProperty.call(m, "error")) w.uint32(10).string(m.error);
          return w;
        };
        ResponseException.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        ResponseException.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.tendermint.abci.types.ResponseException();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.error = r.string();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        ResponseException.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        return ResponseException;
      })();
      types.ResponseEcho = (function () {
        function ResponseEcho(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        ResponseEcho.prototype.message = "";
        ResponseEcho.create = function create(properties) {
          return new ResponseEcho(properties);
        };
        ResponseEcho.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.message != null && Object.hasOwnProperty.call(m, "message")) w.uint32(10).string(m.message);
          return w;
        };
        ResponseEcho.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        ResponseEcho.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.tendermint.abci.types.ResponseEcho();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.message = r.string();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        ResponseEcho.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        return ResponseEcho;
      })();
      types.ResponseFlush = (function () {
        function ResponseFlush(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        ResponseFlush.create = function create(properties) {
          return new ResponseFlush(properties);
        };
        ResponseFlush.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          return w;
        };
        ResponseFlush.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        ResponseFlush.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.tendermint.abci.types.ResponseFlush();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        ResponseFlush.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        return ResponseFlush;
      })();
      types.ResponseInfo = (function () {
        function ResponseInfo(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        ResponseInfo.prototype.data = "";
        ResponseInfo.prototype.version = "";
        ResponseInfo.prototype.appVersion = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
        ResponseInfo.prototype.lastBlockHeight = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        ResponseInfo.prototype.lastBlockAppHash = $util.newBuffer([]);
        ResponseInfo.create = function create(properties) {
          return new ResponseInfo(properties);
        };
        ResponseInfo.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.data != null && Object.hasOwnProperty.call(m, "data")) w.uint32(10).string(m.data);
          if (m.version != null && Object.hasOwnProperty.call(m, "version")) w.uint32(18).string(m.version);
          if (m.appVersion != null && Object.hasOwnProperty.call(m, "appVersion"))
            w.uint32(24).uint64(m.appVersion);
          if (m.lastBlockHeight != null && Object.hasOwnProperty.call(m, "lastBlockHeight"))
            w.uint32(32).int64(m.lastBlockHeight);
          if (m.lastBlockAppHash != null && Object.hasOwnProperty.call(m, "lastBlockAppHash"))
            w.uint32(42).bytes(m.lastBlockAppHash);
          return w;
        };
        ResponseInfo.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        ResponseInfo.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.tendermint.abci.types.ResponseInfo();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.data = r.string();
                break;
              case 2:
                m.version = r.string();
                break;
              case 3:
                m.appVersion = r.uint64();
                break;
              case 4:
                m.lastBlockHeight = r.int64();
                break;
              case 5:
                m.lastBlockAppHash = r.bytes();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        ResponseInfo.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        return ResponseInfo;
      })();
      types.ResponseSetOption = (function () {
        function ResponseSetOption(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        ResponseSetOption.prototype.code = 0;
        ResponseSetOption.prototype.log = "";
        ResponseSetOption.prototype.info = "";
        ResponseSetOption.create = function create(properties) {
          return new ResponseSetOption(properties);
        };
        ResponseSetOption.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.code != null && Object.hasOwnProperty.call(m, "code")) w.uint32(8).uint32(m.code);
          if (m.log != null && Object.hasOwnProperty.call(m, "log")) w.uint32(26).string(m.log);
          if (m.info != null && Object.hasOwnProperty.call(m, "info")) w.uint32(34).string(m.info);
          return w;
        };
        ResponseSetOption.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        ResponseSetOption.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.tendermint.abci.types.ResponseSetOption();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.code = r.uint32();
                break;
              case 3:
                m.log = r.string();
                break;
              case 4:
                m.info = r.string();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        ResponseSetOption.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        return ResponseSetOption;
      })();
      types.ResponseInitChain = (function () {
        function ResponseInitChain(p) {
          this.validators = [];
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        ResponseInitChain.prototype.consensusParams = null;
        ResponseInitChain.prototype.validators = $util.emptyArray;
        ResponseInitChain.create = function create(properties) {
          return new ResponseInitChain(properties);
        };
        ResponseInitChain.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.consensusParams != null && Object.hasOwnProperty.call(m, "consensusParams"))
            $root.tendermint.abci.types.ConsensusParams.encode(
              m.consensusParams,
              w.uint32(10).fork(),
            ).ldelim();
          if (m.validators != null && m.validators.length) {
            for (var i = 0; i < m.validators.length; ++i)
              $root.tendermint.abci.types.ValidatorUpdate.encode(
                m.validators[i],
                w.uint32(18).fork(),
              ).ldelim();
          }
          return w;
        };
        ResponseInitChain.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        ResponseInitChain.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.tendermint.abci.types.ResponseInitChain();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.consensusParams = $root.tendermint.abci.types.ConsensusParams.decode(r, r.uint32());
                break;
              case 2:
                if (!(m.validators && m.validators.length)) m.validators = [];
                m.validators.push($root.tendermint.abci.types.ValidatorUpdate.decode(r, r.uint32()));
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        ResponseInitChain.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        return ResponseInitChain;
      })();
      types.ResponseQuery = (function () {
        function ResponseQuery(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        ResponseQuery.prototype.code = 0;
        ResponseQuery.prototype.log = "";
        ResponseQuery.prototype.info = "";
        ResponseQuery.prototype.index = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        ResponseQuery.prototype.key = $util.newBuffer([]);
        ResponseQuery.prototype.value = $util.newBuffer([]);
        ResponseQuery.prototype.proof = null;
        ResponseQuery.prototype.height = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        ResponseQuery.prototype.codespace = "";
        ResponseQuery.create = function create(properties) {
          return new ResponseQuery(properties);
        };
        ResponseQuery.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.code != null && Object.hasOwnProperty.call(m, "code")) w.uint32(8).uint32(m.code);
          if (m.log != null && Object.hasOwnProperty.call(m, "log")) w.uint32(26).string(m.log);
          if (m.info != null && Object.hasOwnProperty.call(m, "info")) w.uint32(34).string(m.info);
          if (m.index != null && Object.hasOwnProperty.call(m, "index")) w.uint32(40).int64(m.index);
          if (m.key != null && Object.hasOwnProperty.call(m, "key")) w.uint32(50).bytes(m.key);
          if (m.value != null && Object.hasOwnProperty.call(m, "value")) w.uint32(58).bytes(m.value);
          if (m.proof != null && Object.hasOwnProperty.call(m, "proof"))
            $root.tendermint.crypto.merkle.Proof.encode(m.proof, w.uint32(66).fork()).ldelim();
          if (m.height != null && Object.hasOwnProperty.call(m, "height")) w.uint32(72).int64(m.height);
          if (m.codespace != null && Object.hasOwnProperty.call(m, "codespace"))
            w.uint32(82).string(m.codespace);
          return w;
        };
        ResponseQuery.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        ResponseQuery.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.tendermint.abci.types.ResponseQuery();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.code = r.uint32();
                break;
              case 3:
                m.log = r.string();
                break;
              case 4:
                m.info = r.string();
                break;
              case 5:
                m.index = r.int64();
                break;
              case 6:
                m.key = r.bytes();
                break;
              case 7:
                m.value = r.bytes();
                break;
              case 8:
                m.proof = $root.tendermint.crypto.merkle.Proof.decode(r, r.uint32());
                break;
              case 9:
                m.height = r.int64();
                break;
              case 10:
                m.codespace = r.string();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        ResponseQuery.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        return ResponseQuery;
      })();
      types.ResponseBeginBlock = (function () {
        function ResponseBeginBlock(p) {
          this.events = [];
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        ResponseBeginBlock.prototype.events = $util.emptyArray;
        ResponseBeginBlock.create = function create(properties) {
          return new ResponseBeginBlock(properties);
        };
        ResponseBeginBlock.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.events != null && m.events.length) {
            for (var i = 0; i < m.events.length; ++i)
              $root.tendermint.abci.types.Event.encode(m.events[i], w.uint32(10).fork()).ldelim();
          }
          return w;
        };
        ResponseBeginBlock.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        ResponseBeginBlock.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.tendermint.abci.types.ResponseBeginBlock();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                if (!(m.events && m.events.length)) m.events = [];
                m.events.push($root.tendermint.abci.types.Event.decode(r, r.uint32()));
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        ResponseBeginBlock.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        return ResponseBeginBlock;
      })();
      types.ResponseCheckTx = (function () {
        function ResponseCheckTx(p) {
          this.events = [];
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        ResponseCheckTx.prototype.code = 0;
        ResponseCheckTx.prototype.data = $util.newBuffer([]);
        ResponseCheckTx.prototype.log = "";
        ResponseCheckTx.prototype.info = "";
        ResponseCheckTx.prototype.gasWanted = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        ResponseCheckTx.prototype.gasUsed = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        ResponseCheckTx.prototype.events = $util.emptyArray;
        ResponseCheckTx.prototype.codespace = "";
        ResponseCheckTx.create = function create(properties) {
          return new ResponseCheckTx(properties);
        };
        ResponseCheckTx.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.code != null && Object.hasOwnProperty.call(m, "code")) w.uint32(8).uint32(m.code);
          if (m.data != null && Object.hasOwnProperty.call(m, "data")) w.uint32(18).bytes(m.data);
          if (m.log != null && Object.hasOwnProperty.call(m, "log")) w.uint32(26).string(m.log);
          if (m.info != null && Object.hasOwnProperty.call(m, "info")) w.uint32(34).string(m.info);
          if (m.gasWanted != null && Object.hasOwnProperty.call(m, "gasWanted"))
            w.uint32(40).int64(m.gasWanted);
          if (m.gasUsed != null && Object.hasOwnProperty.call(m, "gasUsed")) w.uint32(48).int64(m.gasUsed);
          if (m.events != null && m.events.length) {
            for (var i = 0; i < m.events.length; ++i)
              $root.tendermint.abci.types.Event.encode(m.events[i], w.uint32(58).fork()).ldelim();
          }
          if (m.codespace != null && Object.hasOwnProperty.call(m, "codespace"))
            w.uint32(66).string(m.codespace);
          return w;
        };
        ResponseCheckTx.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        ResponseCheckTx.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.tendermint.abci.types.ResponseCheckTx();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.code = r.uint32();
                break;
              case 2:
                m.data = r.bytes();
                break;
              case 3:
                m.log = r.string();
                break;
              case 4:
                m.info = r.string();
                break;
              case 5:
                m.gasWanted = r.int64();
                break;
              case 6:
                m.gasUsed = r.int64();
                break;
              case 7:
                if (!(m.events && m.events.length)) m.events = [];
                m.events.push($root.tendermint.abci.types.Event.decode(r, r.uint32()));
                break;
              case 8:
                m.codespace = r.string();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        ResponseCheckTx.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        return ResponseCheckTx;
      })();
      types.ResponseDeliverTx = (function () {
        function ResponseDeliverTx(p) {
          this.events = [];
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        ResponseDeliverTx.prototype.code = 0;
        ResponseDeliverTx.prototype.data = $util.newBuffer([]);
        ResponseDeliverTx.prototype.log = "";
        ResponseDeliverTx.prototype.info = "";
        ResponseDeliverTx.prototype.gasWanted = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        ResponseDeliverTx.prototype.gasUsed = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        ResponseDeliverTx.prototype.events = $util.emptyArray;
        ResponseDeliverTx.prototype.codespace = "";
        ResponseDeliverTx.create = function create(properties) {
          return new ResponseDeliverTx(properties);
        };
        ResponseDeliverTx.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.code != null && Object.hasOwnProperty.call(m, "code")) w.uint32(8).uint32(m.code);
          if (m.data != null && Object.hasOwnProperty.call(m, "data")) w.uint32(18).bytes(m.data);
          if (m.log != null && Object.hasOwnProperty.call(m, "log")) w.uint32(26).string(m.log);
          if (m.info != null && Object.hasOwnProperty.call(m, "info")) w.uint32(34).string(m.info);
          if (m.gasWanted != null && Object.hasOwnProperty.call(m, "gasWanted"))
            w.uint32(40).int64(m.gasWanted);
          if (m.gasUsed != null && Object.hasOwnProperty.call(m, "gasUsed")) w.uint32(48).int64(m.gasUsed);
          if (m.events != null && m.events.length) {
            for (var i = 0; i < m.events.length; ++i)
              $root.tendermint.abci.types.Event.encode(m.events[i], w.uint32(58).fork()).ldelim();
          }
          if (m.codespace != null && Object.hasOwnProperty.call(m, "codespace"))
            w.uint32(66).string(m.codespace);
          return w;
        };
        ResponseDeliverTx.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        ResponseDeliverTx.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.tendermint.abci.types.ResponseDeliverTx();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.code = r.uint32();
                break;
              case 2:
                m.data = r.bytes();
                break;
              case 3:
                m.log = r.string();
                break;
              case 4:
                m.info = r.string();
                break;
              case 5:
                m.gasWanted = r.int64();
                break;
              case 6:
                m.gasUsed = r.int64();
                break;
              case 7:
                if (!(m.events && m.events.length)) m.events = [];
                m.events.push($root.tendermint.abci.types.Event.decode(r, r.uint32()));
                break;
              case 8:
                m.codespace = r.string();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        ResponseDeliverTx.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        return ResponseDeliverTx;
      })();
      types.ResponseEndBlock = (function () {
        function ResponseEndBlock(p) {
          this.validatorUpdates = [];
          this.events = [];
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        ResponseEndBlock.prototype.validatorUpdates = $util.emptyArray;
        ResponseEndBlock.prototype.consensusParamUpdates = null;
        ResponseEndBlock.prototype.events = $util.emptyArray;
        ResponseEndBlock.create = function create(properties) {
          return new ResponseEndBlock(properties);
        };
        ResponseEndBlock.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.validatorUpdates != null && m.validatorUpdates.length) {
            for (var i = 0; i < m.validatorUpdates.length; ++i)
              $root.tendermint.abci.types.ValidatorUpdate.encode(
                m.validatorUpdates[i],
                w.uint32(10).fork(),
              ).ldelim();
          }
          if (m.consensusParamUpdates != null && Object.hasOwnProperty.call(m, "consensusParamUpdates"))
            $root.tendermint.abci.types.ConsensusParams.encode(
              m.consensusParamUpdates,
              w.uint32(18).fork(),
            ).ldelim();
          if (m.events != null && m.events.length) {
            for (var i = 0; i < m.events.length; ++i)
              $root.tendermint.abci.types.Event.encode(m.events[i], w.uint32(26).fork()).ldelim();
          }
          return w;
        };
        ResponseEndBlock.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        ResponseEndBlock.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.tendermint.abci.types.ResponseEndBlock();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                if (!(m.validatorUpdates && m.validatorUpdates.length)) m.validatorUpdates = [];
                m.validatorUpdates.push($root.tendermint.abci.types.ValidatorUpdate.decode(r, r.uint32()));
                break;
              case 2:
                m.consensusParamUpdates = $root.tendermint.abci.types.ConsensusParams.decode(r, r.uint32());
                break;
              case 3:
                if (!(m.events && m.events.length)) m.events = [];
                m.events.push($root.tendermint.abci.types.Event.decode(r, r.uint32()));
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        ResponseEndBlock.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        return ResponseEndBlock;
      })();
      types.ResponseCommit = (function () {
        function ResponseCommit(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        ResponseCommit.prototype.data = $util.newBuffer([]);
        ResponseCommit.create = function create(properties) {
          return new ResponseCommit(properties);
        };
        ResponseCommit.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.data != null && Object.hasOwnProperty.call(m, "data")) w.uint32(18).bytes(m.data);
          return w;
        };
        ResponseCommit.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        ResponseCommit.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.tendermint.abci.types.ResponseCommit();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 2:
                m.data = r.bytes();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        ResponseCommit.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        return ResponseCommit;
      })();
      types.ConsensusParams = (function () {
        function ConsensusParams(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        ConsensusParams.prototype.block = null;
        ConsensusParams.prototype.evidence = null;
        ConsensusParams.prototype.validator = null;
        ConsensusParams.create = function create(properties) {
          return new ConsensusParams(properties);
        };
        ConsensusParams.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.block != null && Object.hasOwnProperty.call(m, "block"))
            $root.tendermint.abci.types.BlockParams.encode(m.block, w.uint32(10).fork()).ldelim();
          if (m.evidence != null && Object.hasOwnProperty.call(m, "evidence"))
            $root.tendermint.abci.types.EvidenceParams.encode(m.evidence, w.uint32(18).fork()).ldelim();
          if (m.validator != null && Object.hasOwnProperty.call(m, "validator"))
            $root.tendermint.abci.types.ValidatorParams.encode(m.validator, w.uint32(26).fork()).ldelim();
          return w;
        };
        ConsensusParams.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        ConsensusParams.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.tendermint.abci.types.ConsensusParams();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.block = $root.tendermint.abci.types.BlockParams.decode(r, r.uint32());
                break;
              case 2:
                m.evidence = $root.tendermint.abci.types.EvidenceParams.decode(r, r.uint32());
                break;
              case 3:
                m.validator = $root.tendermint.abci.types.ValidatorParams.decode(r, r.uint32());
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        ConsensusParams.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        return ConsensusParams;
      })();
      types.BlockParams = (function () {
        function BlockParams(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        BlockParams.prototype.maxBytes = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        BlockParams.prototype.maxGas = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        BlockParams.create = function create(properties) {
          return new BlockParams(properties);
        };
        BlockParams.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.maxBytes != null && Object.hasOwnProperty.call(m, "maxBytes")) w.uint32(8).int64(m.maxBytes);
          if (m.maxGas != null && Object.hasOwnProperty.call(m, "maxGas")) w.uint32(16).int64(m.maxGas);
          return w;
        };
        BlockParams.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        BlockParams.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.tendermint.abci.types.BlockParams();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.maxBytes = r.int64();
                break;
              case 2:
                m.maxGas = r.int64();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        BlockParams.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        return BlockParams;
      })();
      types.EvidenceParams = (function () {
        function EvidenceParams(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        EvidenceParams.prototype.maxAgeNumBlocks = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        EvidenceParams.prototype.maxAgeDuration = null;
        EvidenceParams.create = function create(properties) {
          return new EvidenceParams(properties);
        };
        EvidenceParams.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.maxAgeNumBlocks != null && Object.hasOwnProperty.call(m, "maxAgeNumBlocks"))
            w.uint32(8).int64(m.maxAgeNumBlocks);
          if (m.maxAgeDuration != null && Object.hasOwnProperty.call(m, "maxAgeDuration"))
            $root.google.protobuf.Duration.encode(m.maxAgeDuration, w.uint32(18).fork()).ldelim();
          return w;
        };
        EvidenceParams.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        EvidenceParams.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.tendermint.abci.types.EvidenceParams();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.maxAgeNumBlocks = r.int64();
                break;
              case 2:
                m.maxAgeDuration = $root.google.protobuf.Duration.decode(r, r.uint32());
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        EvidenceParams.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        return EvidenceParams;
      })();
      types.ValidatorParams = (function () {
        function ValidatorParams(p) {
          this.pubKeyTypes = [];
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        ValidatorParams.prototype.pubKeyTypes = $util.emptyArray;
        ValidatorParams.create = function create(properties) {
          return new ValidatorParams(properties);
        };
        ValidatorParams.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.pubKeyTypes != null && m.pubKeyTypes.length) {
            for (var i = 0; i < m.pubKeyTypes.length; ++i) w.uint32(10).string(m.pubKeyTypes[i]);
          }
          return w;
        };
        ValidatorParams.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        ValidatorParams.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.tendermint.abci.types.ValidatorParams();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                if (!(m.pubKeyTypes && m.pubKeyTypes.length)) m.pubKeyTypes = [];
                m.pubKeyTypes.push(r.string());
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        ValidatorParams.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        return ValidatorParams;
      })();
      types.LastCommitInfo = (function () {
        function LastCommitInfo(p) {
          this.votes = [];
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        LastCommitInfo.prototype.round = 0;
        LastCommitInfo.prototype.votes = $util.emptyArray;
        LastCommitInfo.create = function create(properties) {
          return new LastCommitInfo(properties);
        };
        LastCommitInfo.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.round != null && Object.hasOwnProperty.call(m, "round")) w.uint32(8).int32(m.round);
          if (m.votes != null && m.votes.length) {
            for (var i = 0; i < m.votes.length; ++i)
              $root.tendermint.abci.types.VoteInfo.encode(m.votes[i], w.uint32(18).fork()).ldelim();
          }
          return w;
        };
        LastCommitInfo.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        LastCommitInfo.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.tendermint.abci.types.LastCommitInfo();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.round = r.int32();
                break;
              case 2:
                if (!(m.votes && m.votes.length)) m.votes = [];
                m.votes.push($root.tendermint.abci.types.VoteInfo.decode(r, r.uint32()));
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        LastCommitInfo.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        return LastCommitInfo;
      })();
      types.Event = (function () {
        function Event(p) {
          this.attributes = [];
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        Event.prototype.type = "";
        Event.prototype.attributes = $util.emptyArray;
        Event.create = function create(properties) {
          return new Event(properties);
        };
        Event.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.type != null && Object.hasOwnProperty.call(m, "type")) w.uint32(10).string(m.type);
          if (m.attributes != null && m.attributes.length) {
            for (var i = 0; i < m.attributes.length; ++i)
              $root.tendermint.libs.kv.Pair.encode(m.attributes[i], w.uint32(18).fork()).ldelim();
          }
          return w;
        };
        Event.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        Event.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.tendermint.abci.types.Event();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.type = r.string();
                break;
              case 2:
                if (!(m.attributes && m.attributes.length)) m.attributes = [];
                m.attributes.push($root.tendermint.libs.kv.Pair.decode(r, r.uint32()));
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        Event.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        return Event;
      })();
      types.Header = (function () {
        function Header(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        Header.prototype.version = null;
        Header.prototype.chainId = "";
        Header.prototype.height = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        Header.prototype.time = null;
        Header.prototype.lastBlockId = null;
        Header.prototype.lastCommitHash = $util.newBuffer([]);
        Header.prototype.dataHash = $util.newBuffer([]);
        Header.prototype.validatorsHash = $util.newBuffer([]);
        Header.prototype.nextValidatorsHash = $util.newBuffer([]);
        Header.prototype.consensusHash = $util.newBuffer([]);
        Header.prototype.appHash = $util.newBuffer([]);
        Header.prototype.lastResultsHash = $util.newBuffer([]);
        Header.prototype.evidenceHash = $util.newBuffer([]);
        Header.prototype.proposerAddress = $util.newBuffer([]);
        Header.create = function create(properties) {
          return new Header(properties);
        };
        Header.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.version != null && Object.hasOwnProperty.call(m, "version"))
            $root.tendermint.abci.types.Version.encode(m.version, w.uint32(10).fork()).ldelim();
          if (m.chainId != null && Object.hasOwnProperty.call(m, "chainId")) w.uint32(18).string(m.chainId);
          if (m.height != null && Object.hasOwnProperty.call(m, "height")) w.uint32(24).int64(m.height);
          if (m.time != null && Object.hasOwnProperty.call(m, "time"))
            $root.google.protobuf.Timestamp.encode(m.time, w.uint32(34).fork()).ldelim();
          if (m.lastBlockId != null && Object.hasOwnProperty.call(m, "lastBlockId"))
            $root.tendermint.abci.types.BlockID.encode(m.lastBlockId, w.uint32(42).fork()).ldelim();
          if (m.lastCommitHash != null && Object.hasOwnProperty.call(m, "lastCommitHash"))
            w.uint32(50).bytes(m.lastCommitHash);
          if (m.dataHash != null && Object.hasOwnProperty.call(m, "dataHash")) w.uint32(58).bytes(m.dataHash);
          if (m.validatorsHash != null && Object.hasOwnProperty.call(m, "validatorsHash"))
            w.uint32(66).bytes(m.validatorsHash);
          if (m.nextValidatorsHash != null && Object.hasOwnProperty.call(m, "nextValidatorsHash"))
            w.uint32(74).bytes(m.nextValidatorsHash);
          if (m.consensusHash != null && Object.hasOwnProperty.call(m, "consensusHash"))
            w.uint32(82).bytes(m.consensusHash);
          if (m.appHash != null && Object.hasOwnProperty.call(m, "appHash")) w.uint32(90).bytes(m.appHash);
          if (m.lastResultsHash != null && Object.hasOwnProperty.call(m, "lastResultsHash"))
            w.uint32(98).bytes(m.lastResultsHash);
          if (m.evidenceHash != null && Object.hasOwnProperty.call(m, "evidenceHash"))
            w.uint32(106).bytes(m.evidenceHash);
          if (m.proposerAddress != null && Object.hasOwnProperty.call(m, "proposerAddress"))
            w.uint32(114).bytes(m.proposerAddress);
          return w;
        };
        Header.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        Header.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.tendermint.abci.types.Header();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.version = $root.tendermint.abci.types.Version.decode(r, r.uint32());
                break;
              case 2:
                m.chainId = r.string();
                break;
              case 3:
                m.height = r.int64();
                break;
              case 4:
                m.time = $root.google.protobuf.Timestamp.decode(r, r.uint32());
                break;
              case 5:
                m.lastBlockId = $root.tendermint.abci.types.BlockID.decode(r, r.uint32());
                break;
              case 6:
                m.lastCommitHash = r.bytes();
                break;
              case 7:
                m.dataHash = r.bytes();
                break;
              case 8:
                m.validatorsHash = r.bytes();
                break;
              case 9:
                m.nextValidatorsHash = r.bytes();
                break;
              case 10:
                m.consensusHash = r.bytes();
                break;
              case 11:
                m.appHash = r.bytes();
                break;
              case 12:
                m.lastResultsHash = r.bytes();
                break;
              case 13:
                m.evidenceHash = r.bytes();
                break;
              case 14:
                m.proposerAddress = r.bytes();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        Header.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        return Header;
      })();
      types.Version = (function () {
        function Version(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        Version.prototype.Block = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
        Version.prototype.App = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
        Version.create = function create(properties) {
          return new Version(properties);
        };
        Version.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.Block != null && Object.hasOwnProperty.call(m, "Block")) w.uint32(8).uint64(m.Block);
          if (m.App != null && Object.hasOwnProperty.call(m, "App")) w.uint32(16).uint64(m.App);
          return w;
        };
        Version.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        Version.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.tendermint.abci.types.Version();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.Block = r.uint64();
                break;
              case 2:
                m.App = r.uint64();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        Version.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        return Version;
      })();
      types.BlockID = (function () {
        function BlockID(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        BlockID.prototype.hash = $util.newBuffer([]);
        BlockID.prototype.partsHeader = null;
        BlockID.create = function create(properties) {
          return new BlockID(properties);
        };
        BlockID.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.hash != null && Object.hasOwnProperty.call(m, "hash")) w.uint32(10).bytes(m.hash);
          if (m.partsHeader != null && Object.hasOwnProperty.call(m, "partsHeader"))
            $root.tendermint.abci.types.PartSetHeader.encode(m.partsHeader, w.uint32(18).fork()).ldelim();
          return w;
        };
        BlockID.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        BlockID.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.tendermint.abci.types.BlockID();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.hash = r.bytes();
                break;
              case 2:
                m.partsHeader = $root.tendermint.abci.types.PartSetHeader.decode(r, r.uint32());
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        BlockID.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        return BlockID;
      })();
      types.PartSetHeader = (function () {
        function PartSetHeader(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        PartSetHeader.prototype.total = 0;
        PartSetHeader.prototype.hash = $util.newBuffer([]);
        PartSetHeader.create = function create(properties) {
          return new PartSetHeader(properties);
        };
        PartSetHeader.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.total != null && Object.hasOwnProperty.call(m, "total")) w.uint32(8).int32(m.total);
          if (m.hash != null && Object.hasOwnProperty.call(m, "hash")) w.uint32(18).bytes(m.hash);
          return w;
        };
        PartSetHeader.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        PartSetHeader.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.tendermint.abci.types.PartSetHeader();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.total = r.int32();
                break;
              case 2:
                m.hash = r.bytes();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        PartSetHeader.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        return PartSetHeader;
      })();
      types.Validator = (function () {
        function Validator(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        Validator.prototype.address = $util.newBuffer([]);
        Validator.prototype.power = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        Validator.create = function create(properties) {
          return new Validator(properties);
        };
        Validator.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.address != null && Object.hasOwnProperty.call(m, "address")) w.uint32(10).bytes(m.address);
          if (m.power != null && Object.hasOwnProperty.call(m, "power")) w.uint32(24).int64(m.power);
          return w;
        };
        Validator.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        Validator.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.tendermint.abci.types.Validator();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.address = r.bytes();
                break;
              case 3:
                m.power = r.int64();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        Validator.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        return Validator;
      })();
      types.ValidatorUpdate = (function () {
        function ValidatorUpdate(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        ValidatorUpdate.prototype.pubKey = null;
        ValidatorUpdate.prototype.power = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        ValidatorUpdate.create = function create(properties) {
          return new ValidatorUpdate(properties);
        };
        ValidatorUpdate.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.pubKey != null && Object.hasOwnProperty.call(m, "pubKey"))
            $root.tendermint.abci.types.PubKey.encode(m.pubKey, w.uint32(10).fork()).ldelim();
          if (m.power != null && Object.hasOwnProperty.call(m, "power")) w.uint32(16).int64(m.power);
          return w;
        };
        ValidatorUpdate.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        ValidatorUpdate.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.tendermint.abci.types.ValidatorUpdate();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.pubKey = $root.tendermint.abci.types.PubKey.decode(r, r.uint32());
                break;
              case 2:
                m.power = r.int64();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        ValidatorUpdate.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        return ValidatorUpdate;
      })();
      types.VoteInfo = (function () {
        function VoteInfo(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        VoteInfo.prototype.validator = null;
        VoteInfo.prototype.signedLastBlock = false;
        VoteInfo.create = function create(properties) {
          return new VoteInfo(properties);
        };
        VoteInfo.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.validator != null && Object.hasOwnProperty.call(m, "validator"))
            $root.tendermint.abci.types.Validator.encode(m.validator, w.uint32(10).fork()).ldelim();
          if (m.signedLastBlock != null && Object.hasOwnProperty.call(m, "signedLastBlock"))
            w.uint32(16).bool(m.signedLastBlock);
          return w;
        };
        VoteInfo.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        VoteInfo.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.tendermint.abci.types.VoteInfo();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.validator = $root.tendermint.abci.types.Validator.decode(r, r.uint32());
                break;
              case 2:
                m.signedLastBlock = r.bool();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        VoteInfo.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        return VoteInfo;
      })();
      types.PubKey = (function () {
        function PubKey(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        PubKey.prototype.type = "";
        PubKey.prototype.data = $util.newBuffer([]);
        PubKey.create = function create(properties) {
          return new PubKey(properties);
        };
        PubKey.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.type != null && Object.hasOwnProperty.call(m, "type")) w.uint32(10).string(m.type);
          if (m.data != null && Object.hasOwnProperty.call(m, "data")) w.uint32(18).bytes(m.data);
          return w;
        };
        PubKey.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        PubKey.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.tendermint.abci.types.PubKey();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.type = r.string();
                break;
              case 2:
                m.data = r.bytes();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        PubKey.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        return PubKey;
      })();
      types.Evidence = (function () {
        function Evidence(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        Evidence.prototype.type = "";
        Evidence.prototype.validator = null;
        Evidence.prototype.height = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        Evidence.prototype.time = null;
        Evidence.prototype.totalVotingPower = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        Evidence.create = function create(properties) {
          return new Evidence(properties);
        };
        Evidence.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.type != null && Object.hasOwnProperty.call(m, "type")) w.uint32(10).string(m.type);
          if (m.validator != null && Object.hasOwnProperty.call(m, "validator"))
            $root.tendermint.abci.types.Validator.encode(m.validator, w.uint32(18).fork()).ldelim();
          if (m.height != null && Object.hasOwnProperty.call(m, "height")) w.uint32(24).int64(m.height);
          if (m.time != null && Object.hasOwnProperty.call(m, "time"))
            $root.google.protobuf.Timestamp.encode(m.time, w.uint32(34).fork()).ldelim();
          if (m.totalVotingPower != null && Object.hasOwnProperty.call(m, "totalVotingPower"))
            w.uint32(40).int64(m.totalVotingPower);
          return w;
        };
        Evidence.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        Evidence.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.tendermint.abci.types.Evidence();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.type = r.string();
                break;
              case 2:
                m.validator = $root.tendermint.abci.types.Validator.decode(r, r.uint32());
                break;
              case 3:
                m.height = r.int64();
                break;
              case 4:
                m.time = $root.google.protobuf.Timestamp.decode(r, r.uint32());
                break;
              case 5:
                m.totalVotingPower = r.int64();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        Evidence.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        return Evidence;
      })();
      types.ABCIApplication = (function () {
        function ABCIApplication(rpcImpl, requestDelimited, responseDelimited) {
          $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }
        (ABCIApplication.prototype = Object.create(
          $protobuf.rpc.Service.prototype,
        )).constructor = ABCIApplication;
        ABCIApplication.create = function create(rpcImpl, requestDelimited, responseDelimited) {
          return new this(rpcImpl, requestDelimited, responseDelimited);
        };
        Object.defineProperty(
          (ABCIApplication.prototype.echo = function echo(request, callback) {
            return this.rpcCall(
              echo,
              $root.tendermint.abci.types.RequestEcho,
              $root.tendermint.abci.types.ResponseEcho,
              request,
              callback,
            );
          }),
          "name",
          { value: "Echo" },
        );
        Object.defineProperty(
          (ABCIApplication.prototype.flush = function flush(request, callback) {
            return this.rpcCall(
              flush,
              $root.tendermint.abci.types.RequestFlush,
              $root.tendermint.abci.types.ResponseFlush,
              request,
              callback,
            );
          }),
          "name",
          { value: "Flush" },
        );
        Object.defineProperty(
          (ABCIApplication.prototype.info = function info(request, callback) {
            return this.rpcCall(
              info,
              $root.tendermint.abci.types.RequestInfo,
              $root.tendermint.abci.types.ResponseInfo,
              request,
              callback,
            );
          }),
          "name",
          { value: "Info" },
        );
        Object.defineProperty(
          (ABCIApplication.prototype.setOption = function setOption(request, callback) {
            return this.rpcCall(
              setOption,
              $root.tendermint.abci.types.RequestSetOption,
              $root.tendermint.abci.types.ResponseSetOption,
              request,
              callback,
            );
          }),
          "name",
          { value: "SetOption" },
        );
        Object.defineProperty(
          (ABCIApplication.prototype.deliverTx = function deliverTx(request, callback) {
            return this.rpcCall(
              deliverTx,
              $root.tendermint.abci.types.RequestDeliverTx,
              $root.tendermint.abci.types.ResponseDeliverTx,
              request,
              callback,
            );
          }),
          "name",
          { value: "DeliverTx" },
        );
        Object.defineProperty(
          (ABCIApplication.prototype.checkTx = function checkTx(request, callback) {
            return this.rpcCall(
              checkTx,
              $root.tendermint.abci.types.RequestCheckTx,
              $root.tendermint.abci.types.ResponseCheckTx,
              request,
              callback,
            );
          }),
          "name",
          { value: "CheckTx" },
        );
        Object.defineProperty(
          (ABCIApplication.prototype.query = function query(request, callback) {
            return this.rpcCall(
              query,
              $root.tendermint.abci.types.RequestQuery,
              $root.tendermint.abci.types.ResponseQuery,
              request,
              callback,
            );
          }),
          "name",
          { value: "Query" },
        );
        Object.defineProperty(
          (ABCIApplication.prototype.commit = function commit(request, callback) {
            return this.rpcCall(
              commit,
              $root.tendermint.abci.types.RequestCommit,
              $root.tendermint.abci.types.ResponseCommit,
              request,
              callback,
            );
          }),
          "name",
          { value: "Commit" },
        );
        Object.defineProperty(
          (ABCIApplication.prototype.initChain = function initChain(request, callback) {
            return this.rpcCall(
              initChain,
              $root.tendermint.abci.types.RequestInitChain,
              $root.tendermint.abci.types.ResponseInitChain,
              request,
              callback,
            );
          }),
          "name",
          { value: "InitChain" },
        );
        Object.defineProperty(
          (ABCIApplication.prototype.beginBlock = function beginBlock(request, callback) {
            return this.rpcCall(
              beginBlock,
              $root.tendermint.abci.types.RequestBeginBlock,
              $root.tendermint.abci.types.ResponseBeginBlock,
              request,
              callback,
            );
          }),
          "name",
          { value: "BeginBlock" },
        );
        Object.defineProperty(
          (ABCIApplication.prototype.endBlock = function endBlock(request, callback) {
            return this.rpcCall(
              endBlock,
              $root.tendermint.abci.types.RequestEndBlock,
              $root.tendermint.abci.types.ResponseEndBlock,
              request,
              callback,
            );
          }),
          "name",
          { value: "EndBlock" },
        );
        return ABCIApplication;
      })();
      return types;
    })();
    return abci;
  })();
  tendermint.crypto = (function () {
    var crypto = {};
    crypto.merkle = (function () {
      var merkle = {};
      merkle.ProofOp = (function () {
        function ProofOp(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        ProofOp.prototype.type = "";
        ProofOp.prototype.key = $util.newBuffer([]);
        ProofOp.prototype.data = $util.newBuffer([]);
        ProofOp.create = function create(properties) {
          return new ProofOp(properties);
        };
        ProofOp.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.type != null && Object.hasOwnProperty.call(m, "type")) w.uint32(10).string(m.type);
          if (m.key != null && Object.hasOwnProperty.call(m, "key")) w.uint32(18).bytes(m.key);
          if (m.data != null && Object.hasOwnProperty.call(m, "data")) w.uint32(26).bytes(m.data);
          return w;
        };
        ProofOp.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        ProofOp.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.tendermint.crypto.merkle.ProofOp();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.type = r.string();
                break;
              case 2:
                m.key = r.bytes();
                break;
              case 3:
                m.data = r.bytes();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        ProofOp.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        return ProofOp;
      })();
      merkle.Proof = (function () {
        function Proof(p) {
          this.ops = [];
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        Proof.prototype.ops = $util.emptyArray;
        Proof.create = function create(properties) {
          return new Proof(properties);
        };
        Proof.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.ops != null && m.ops.length) {
            for (var i = 0; i < m.ops.length; ++i)
              $root.tendermint.crypto.merkle.ProofOp.encode(m.ops[i], w.uint32(10).fork()).ldelim();
          }
          return w;
        };
        Proof.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        Proof.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.tendermint.crypto.merkle.Proof();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                if (!(m.ops && m.ops.length)) m.ops = [];
                m.ops.push($root.tendermint.crypto.merkle.ProofOp.decode(r, r.uint32()));
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        Proof.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        return Proof;
      })();
      return merkle;
    })();
    return crypto;
  })();
  tendermint.libs = (function () {
    var libs = {};
    libs.kv = (function () {
      var kv = {};
      kv.Pair = (function () {
        function Pair(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        Pair.prototype.key = $util.newBuffer([]);
        Pair.prototype.value = $util.newBuffer([]);
        Pair.create = function create(properties) {
          return new Pair(properties);
        };
        Pair.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.key != null && Object.hasOwnProperty.call(m, "key")) w.uint32(10).bytes(m.key);
          if (m.value != null && Object.hasOwnProperty.call(m, "value")) w.uint32(18).bytes(m.value);
          return w;
        };
        Pair.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        Pair.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.tendermint.libs.kv.Pair();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.key = r.bytes();
                break;
              case 2:
                m.value = r.bytes();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        Pair.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        return Pair;
      })();
      kv.KI64Pair = (function () {
        function KI64Pair(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        KI64Pair.prototype.key = $util.newBuffer([]);
        KI64Pair.prototype.value = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        KI64Pair.create = function create(properties) {
          return new KI64Pair(properties);
        };
        KI64Pair.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.key != null && Object.hasOwnProperty.call(m, "key")) w.uint32(10).bytes(m.key);
          if (m.value != null && Object.hasOwnProperty.call(m, "value")) w.uint32(16).int64(m.value);
          return w;
        };
        KI64Pair.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        KI64Pair.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.tendermint.libs.kv.KI64Pair();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.key = r.bytes();
                break;
              case 2:
                m.value = r.int64();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        KI64Pair.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        return KI64Pair;
      })();
      return kv;
    })();
    return libs;
  })();
  return tendermint;
})();
$root.google = (function () {
  var google = {};
  google.protobuf = (function () {
    var protobuf = {};
    protobuf.Any = (function () {
      function Any(p) {
        if (p)
          for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Any.prototype.type_url = "";
      Any.prototype.value = $util.newBuffer([]);
      Any.create = function create(properties) {
        return new Any(properties);
      };
      Any.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.type_url != null && Object.hasOwnProperty.call(m, "type_url")) w.uint32(10).string(m.type_url);
        if (m.value != null && Object.hasOwnProperty.call(m, "value")) w.uint32(18).bytes(m.value);
        return w;
      };
      Any.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      Any.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l,
          m = new $root.google.protobuf.Any();
        while (r.pos < c) {
          var t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.type_url = r.string();
              break;
            case 2:
              m.value = r.bytes();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      Any.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      return Any;
    })();
    protobuf.Timestamp = (function () {
      function Timestamp(p) {
        if (p)
          for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      Timestamp.prototype.nanos = 0;
      Timestamp.create = function create(properties) {
        return new Timestamp(properties);
      };
      Timestamp.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.seconds != null && Object.hasOwnProperty.call(m, "seconds")) w.uint32(8).int64(m.seconds);
        if (m.nanos != null && Object.hasOwnProperty.call(m, "nanos")) w.uint32(16).int32(m.nanos);
        return w;
      };
      Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      Timestamp.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l,
          m = new $root.google.protobuf.Timestamp();
        while (r.pos < c) {
          var t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.seconds = r.int64();
              break;
            case 2:
              m.nanos = r.int32();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      Timestamp.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      return Timestamp;
    })();
    protobuf.Duration = (function () {
      function Duration(p) {
        if (p)
          for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Duration.prototype.seconds = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      Duration.prototype.nanos = 0;
      Duration.create = function create(properties) {
        return new Duration(properties);
      };
      Duration.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.seconds != null && Object.hasOwnProperty.call(m, "seconds")) w.uint32(8).int64(m.seconds);
        if (m.nanos != null && Object.hasOwnProperty.call(m, "nanos")) w.uint32(16).int32(m.nanos);
        return w;
      };
      Duration.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      Duration.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l,
          m = new $root.google.protobuf.Duration();
        while (r.pos < c) {
          var t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.seconds = r.int64();
              break;
            case 2:
              m.nanos = r.int32();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      Duration.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      return Duration;
    })();
    return protobuf;
  })();
  return google;
})();
module.exports = $root;
