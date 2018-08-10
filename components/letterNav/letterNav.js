Component({
    properties: {
        letterData: {
            type: Array,
            value: [],
            observer: function(newVal, oldVal, changedPath) {
                // 废弃掉
                // const res = wx.getSystemInfoSync(),
                // letters = this.data.letterData;
                //   this.setData({
                //     windowHeight: res.windowHeight,
                //     windowWidth: res.windowWidth,
                //     pixelRatio: res.pixelRatio
                //   });

                //   const navHeight = letters.length * (36/this.data.pixelRatio), 
                //       eachLetterHeight = 36/this.data.pixelRatio,
                //       comTop = (this.data.windowHeight - navHeight) / 2, 
                //       temp = [];

                //   this.setData({
                //     eachLetterHeight: eachLetterHeight
                //   });
              
                //   for(let i = 0, len = letters.length; i < len; i++) {
                //         const x = this.data.windowWidth - (90) / this.data.pixelRatio,
                //               y = comTop + (i * (eachLetterHeight));
                //         temp.push([x, y]);
                //   }
                //   this.setData({
                //       lettersPosition: temp
                //   });
             }
        },
        letterStyles: {
            type: String,
            value: "left: 690rpx; top: 413rpx;"
        },
        isSearch: {
            type: Boolean,
            value: true
        }
    },
    data:{
        letterId: ""
    },
    methods: {
        onLetterNav(e){
            console.log(e,'onLetterNav')
            let Item = '';
            if( e.currentTarget.id === "SEARCH" ){
                Item = e.currentTarget.id;
            }else{
                Item = e.currentTarget.dataset.item; 
            }
            this.setData({
                letterId: Item
            });
            if( e.currentTarget.id !== "SEARCH" ){
                wx.showToast({
                    title: this.data.letterId,
                    icon: "none"
                });
            }
            this.triggerEvent('getLetterItem', this.data.letterId);

           
        },
        // 废弃掉
        onLetterNavMove(e){
            // const x = e.touches[0].clientX,
            //     y = e.touches[0].clientY,
            //     lettersPosition = this.data.lettersPosition,
            //     eachLetterHeight = this.data.eachLetterHeight,
            //     letters = this.data.letterData;
            // // 判断触摸点是否在字母导航栏上
            // if( x >= lettersPosition[0][0] ) {
            //     for(let i = 0, len = lettersPosition.length; i < len; i++) {
            //         // 判断落在哪个字母区域，取出对应字母所在数组的索引，根据索引更新selected及scroll-into-view的值
            //         const _y = lettersPosition[i][1], // 单个字母所处高度
            //             __y = _y + eachLetterHeight; // 单个字母最大高度取值范围， 36为字母36rpx
            //         if(y >= _y && y <= __y) {
            //             this.setData({
            //                 letterId: letters[i]
            //             });
            //             this.triggerEvent('getLetterItem', this.data.letterId);
            //             break;
            //         }
            //     }
            // }
            // wx.showToast({
            //     title: this.data.letterId,
            //     icon: "none"
            // });
        }
    }
});