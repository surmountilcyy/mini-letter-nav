//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    provinceData: [
      {
        id: 1,
        name: '北京',
        acronyms: 'B'
      },
      {
        id: 2,
        name: '上海',
        acronyms: 'S'
      },
      {
        id: 3,
        name: '河北',
        acronyms: 'H'
      },
      {
        id: 4,
        name: '河南',
        acronyms: 'H'
      },
      {
        id: 5,
        name: '甘肃',
        acronyms: 'G'
      },
      {
        id: 6,
        name: '天津',
        acronyms: 'T'
      },
      {
        id: 7,
        name: '内蒙古',
        acronyms: 'N'
      },
      {
        id: 8,
        name: '黑龙江',
        acronyms: 'H'
      },
      {
        id: 9,
        name: '吉林',
        acronyms: 'J'
      },
      {
        id: 10,
        name: '福建',
        acronyms: 'F'
      },
      {
        id: 11,
        name: '安徽',
        acronyms: 'A'
      }

    ],
    letterData: [
      'A', 'B', 'F', 'G', 'H', 'J', 'N', 'S', 'T'
    ],
    toLetterView:'',
    scrollHeight: wx.getSystemInfoSync().windowHeight
  },
  onLoad() {
    this.handleLetter(this.data.provinceData, this.data.letterData);
  },
  handleLetter(_data, _indexData) {
    this.setData({
      letterData: _indexData
    });
    // 处理列表数据
    let _dataListArr = [];
    this.data.letterData.forEach(ele => {
      let _item = {
        code: '',
        codeData: []
      };
      _data.forEach(element => {
        if (ele === element.acronyms) {
          _item.code = ele;
          _item.codeData.push(element);
        }
      });
      _item.code !== "" && _dataListArr.push(_item);
    });
    this.setData({
      provinceData: _dataListArr
    });
  },
  onGetLetterItem(e) {
    console.log(e,'onGetLetterItem')
    this.setData({
      toLetterView: e.detail
    });
  }
})
