$(function () {
    //渲染选择
    const ulLists = {
        "type": ["S", "A", "B", "C"],
        "gender": ["男忍者", "女忍者"],
        "skill": ["高连击", "高爆发", "起手强", "高灵活", "技能覆盖广"]
    }

    //初始化
    //渲染属性列表
    renderList(ulLists)
    //渲染数据
    renderData(renzheArr)
    //外部定义选择的状态
    let statusObj = {};
    for (let key in ulLists) {
        statusObj[key] = ''
    }
    //点击按钮 激活选中状态
    $('#box').on('click', 'li', function () {
        //激活状态
        activeClass(this)  //点击哪个出现哪个✅
        //筛选的条件
        // 获取选中属性的状态 比如我选择了"S"，"男火影"，"高连击" 就是
        const statusObj = chooseStatus(this) // {type: "S", gender: "男忍者", skill: "高连击"}
        //根据 忍者数组 和  筛选的条件 进行忍者数组的筛选
        const filter_arr=filterArr(renzheArr,statusObj)

        //得到的数组进行渲染
        renderData(filter_arr)
    })

    function renderList(data) {
        const res = template('ul-lists', data)
        $('#box').append(res)
    }

    function renderData(data) {
        const res = template('renzhe_items', data)
        $('#renzhe_list').html(res)
    }

    function activeClass(el) {
        $(el).toggleClass('active').siblings('li').removeClass('active')
    }
    //返回选择状态
    function chooseStatus(item) {
        //  激活状态
        const active = $(item).hasClass('active')
        const status = $(item).find('span').text()
        // //属于哪种类型
        const property = $(item).parent().attr('data-property')
        if (active) {
            statusObj[property] = status
        } else {
            statusObj[property] = ''
        }
        return statusObj
    }

    //数据筛选
    function filterArr(arr,obj){
        let key
        let value

        for (let k in obj) {
            key = k
            value = obj[key]

            if(value){
                arr = arr.filter(item => {

                    return item[key].indexOf(value)>=0
                })

            }
        }
        return arr
    }


})
