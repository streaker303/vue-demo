<template>
  <div id="wrapper" style="height:100%;width:100%;"></div>
</template>

<script>
import echarts from "echarts";
import 'echarts/map/js/world';

export default {
  name: "map",
  data() {
    return {};
  },
  mounted() {
    var chinaGeoCoordMap = {
      黑龙江: [127.9688, 45.368],
      内蒙古: [110.3467, 41.4899],
      吉林: [125.8154, 44.2584],
      北京市: [116.4551, 40.2539],
      辽宁: [123.1238, 42.1216],
      河北: [114.4995, 38.1006],
      天津: [117.4219, 39.4189],
      山西: [112.3352, 37.9413],
      陕西: [109.1162, 34.2004],
      甘肃: [103.5901, 36.3043],
      宁夏: [106.3586, 38.1775],
      青海: [101.4038, 36.8207],
      新疆: [87.9236, 43.5883],
      西藏: [91.11, 29.97],
      四川: [103.9526, 30.7617],
      重庆: [108.384366, 30.439702],
      山东: [117.1582, 36.8701],
      河南: [113.4668, 34.6234],
      江苏: [118.8062, 31.9208],
      安徽: [117.29, 32.0581],
      湖北: [114.3896, 30.6628],
      浙江: [119.5313, 29.8773],
      福建: [119.4543, 25.9222],
      江西: [116.0046, 28.6633],
      湖南: [113.0823, 28.2568],
      贵州: [106.6992, 26.7682],
      云南: [102.9199, 25.4663],
      广东: [113.12244, 23.009505],
      广西: [108.479, 23.1152],
      海南: [110.3893, 19.8516],
      上海: [121.4648, 31.2891]
    };
    var chinaDatas = [
      [
        {
          name: "黑龙江",
          value: 0
        }
      ],
      [
        {
          name: "内蒙古",
          value: 0
        }
      ],
      [
        {
          name: "吉林",
          value: 0
        }
      ],
      [
        {
          name: "辽宁",
          value: 0
        }
      ],
      [
        {
          name: "河北",
          value: 0
        }
      ],
      [
        {
          name: "天津",
          value: 0
        }
      ],
      [
        {
          name: "山西",
          value: 0
        }
      ],
      [
        {
          name: "陕西",
          value: 0
        }
      ],
      [
        {
          name: "甘肃",
          value: 0
        }
      ],
      [
        {
          name: "宁夏",
          value: 0
        }
      ],
      [
        {
          name: "青海",
          value: 0
        }
      ],
      [
        {
          name: "新疆",
          value: 0
        }
      ],
      [
        {
          name: "西藏",
          value: 0
        }
      ],
      [
        {
          name: "四川",
          value: 0
        }
      ],
      [
        {
          name: "重庆",
          value: 0
        }
      ],
      [
        {
          name: "山东",
          value: 0
        }
      ],
      [
        {
          name: "河南",
          value: 0
        }
      ],
      [
        {
          name: "江苏",
          value: 0
        }
      ],
      [
        {
          name: "安徽",
          value: 0
        }
      ],
      [
        {
          name: "湖北",
          value: 0
        }
      ],
      [
        {
          name: "浙江",
          value: 0
        }
      ],
      [
        {
          name: "福建",
          value: 0
        }
      ],
      [
        {
          name: "江西",
          value: 0
        }
      ],
      [
        {
          name: "湖南",
          value: 0
        }
      ],
      [
        {
          name: "贵州",
          value: 0
        }
      ],
      [
        {
          name: "广西",
          value: 0
        }
      ],
      [
        {
          name: "海南",
          value: 0
        }
      ],
      [
        {
          name: "上海",
          value: 1
        }
      ]
    ];

    var convertData = function(data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = chinaGeoCoordMap[dataItem[0].name];
        var toCoord = [116.4551, 40.2539];
        if (fromCoord && toCoord) {
          res.push([
            {
              coord: fromCoord,
              value: dataItem[0].value
            },
            {
              coord: toCoord
            }
          ]);
        }
      }
      return res;
    };
    var series = [];
    [["北京市", chinaDatas]].forEach(function(item, i) {
      console.log(item);
      series.push(
        {
          type: "lines",
          zlevel: 2,
          effect: {
            show: true,
            period: 4, //箭头指向速度，值越小速度越快
            trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
            symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABGCAYAAABBovOlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCM0NDOTc0REFBMTgxMUVBQTc1QThGQTIyRUNBQkM4OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCM0NDOTc0RUFBMTgxMUVBQTc1QThGQTIyRUNBQkM4OCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkIzQ0M5NzRCQUExODExRUFBNzVBOEZBMjJFQ0FCQzg4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkIzQ0M5NzRDQUExODExRUFBNzVBOEZBMjJFQ0FCQzg4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+mMR0HAAAC9ZJREFUeNrsXG1sE+cd/9sJJCSkcTIob+twRLsUkEiMVk1kH+pUhY5NKAlU/YDWxl67qls/hGjsE5WSSONDtW6Jq077tNmuWD9UFIKqvZROjVFVZ2q7xgFRRgeL6YvawiDHa4EC2f/3+M4+X86+F58T29tfulwc3z1393t+z+//8jwXFzlte+JjVDnWT3s7Ek42WO0w2F7+6a8gwPE8jgLuLsINVpK1O92g04D7KwzwtlIHvKvCAPeXLuAp/W6vMMA9/FzdpcrwAFWm9TrZmMshdnv455RgRGVaC4eHSUcYPklbBnkrFKhdFQw2bLjQBhjjADYX/5jhzxJvo7wNtdHhpEV2Q7snKhxwWCezPGYHaN4NyCFzEIBPaeLnCG8hBj5hEvCJCnSWeibJ0iKZANkjj/o+DRF9cJoxHec3wSeN8eY3ADvsBNie2mra1bGi9CMWojHZX+UC2svbsOzPBjRgSyAxAA/liUHHZOADORxlVAw1ohHebDuV9hV11OtbWsrMxqjvIdRWdKRTBjosA53Ln4XSUYp8sFFYl5Q1PpInUhm2Gx5OP/cA+X57lJLTN7L+vv7LL+j7H52gTWcy/flJo4eOL1tOb7SuFb8X0RKydks5GO2Xmew3I0eMneRSac6YSXmQ5N4aQQM5ZMYy6OEd99Lk51dpJP65+AyQBw//he65qC+ZNf42uhGbpFc3+Ghg81a6VFs7Z2DLI77XQibayVjFsuJwi6Crh1ooK7JJMX2CLBayutc208BD3xQsH379ID12dCLnsQ2DT5C7sZ4u9v9OfAbYP350J42v9joJ+KzYWxNxmMWoX60K7kyVRrAVejxkwYlAr6YgSdAx8dcUI4asPt3oiQvkbaqh6Htv5QR7QfsaWjL2gvi9ftd2scHuun6d9u/7gxgVDllEARtElHOVaQxEC2DHZGZHDDPNPGGNmYsMieGzJz6tPjewcSkN/8ArIpLY1KWMJ2EJAdiwV9dXU9eKhbMavSNdpeuH3qEFbWuoyrtc/I7914lTdH00nj4OTN/y1M9m6TquCcecpt3125Rg+cpjvsm9g5IsjVYxAMBRRUIspfb/os3eG+QK3E7plZXxGvtR8CfeYytXebOjkXoKb18jHrjnjyd5fyv9HbT67y/9ZlZDVd5l1HxwiEGOU13vFro89DItfLBNgK4GWzFoev+2HnEtRD7d65rJ66mZLdAMeOfvP8y6h9Ro+Up6+9fPj9rwQ5EamgndT28mbBev6mjG20R3+pbQnWhVKiQyG/r5tx4/5tV7SGg09lO7feRvuSv93VPvjus21BT+BV2LHqbarg6xV0DXAxsGOTr16CqaeHaDiO31wFY6Xy/293900mMBbCGfjFE/Y+RvoBnDyqLRFFtCHk4D3KhwkpfJNcmsN/TQrRzO5bL+PyfpCMvK2JPrqemX7wmWPXLyRJrR1SwX1azXi/u205XQASElt5Nf0k2OSi4PvmyIwvLY+4zot2yJ96qLkpnDkkzAaCPdAWPVo9+QkHkZvor+JqkyUaHr3Ith7s0kD5+grFe6tlIyvnEwHWDD6SnhHxxjPQNdw7IBJs9IV6i2u4OuMvAIA80Y5MdU3Kej4985kzQCGmyOYuS7syMWpR5lH3CFkDp/C8jAextyAL/SgCldrK3RiXPp5KZx+KdUF9gipAIAw2q7viec49mWx02DbTrIZrAVZ23GJy2kGQAdY6CHddJ22JBM0IIkBSxPfEYPB+WQaJbkMdOxxdix9k+T22PWq3evbaKhtz5Jf4Y+wznCIUI6bhyZpFuJ044DrVjwwGlT0Sr7sUneVhuUaCOM04iZBk3N+HBjYHAwn5PkoTbMDOhlBgzJcXgyd+2kXqTwShqPcO5rBvec7xnussW0kLNISErxwD5lFBZGMHL5eTwM9oCBEwXYQbPXNj3FJoPu06kuqs0rAy8im1wHIVxT5ASGukgq3r5CF3oGSAr+ikHfIMC3Y3C8+cCOfHAu5/dnm5sjfO/tPGrDBoEBCNVjBWxLgCvywlvngppFQQPgPbLO6doh1k6lZqLYX7+9NiMvkcN0vnM3uTz1tgCHLM2K39g5G4ENu+/C+YBBeSPprqrub1yyysdYjFq9N1uTyHUNzWG+YHLRYk9PvkglpwdSZZqKvdF6f9ZnSAxCQcsPxKMCzjcLIemGSHKMwDa67aqqBUF+7mhD07IBsjkPYHfWHvF5YGFt/UG+AS93gBKpSFqZMGvIEMdXtxSszw0Dj2d9xkjyvXTUSLPzOk6MaBBscdPdYVWEkpxLwA+pHSbfEBjv5Z5XHKZ0qXaR5UYLLbOiZKsUtFKsPi6SLG36ns9UFccIiMTPJWFEaxxnbPF/orYAt7VM4sqS3nwl2OSd27dCOzY/3Pbmfa1W6xEiJkflD8mQFUPC9I2xF+hjWiDCTbvy8cCnHycOHzgQYhLly6Z9DHhizgCXQYeGjeWKuZ/x+2lfa6uttgH68OsHxN6MgdX/fnoHvXjiUqE6TRvOn6f4/v15o0oGO2K3/YIWAuUDff3OnXSmoaGgh0ch6rGjCdp0ZkrXOf7zu230jye6ad+0uxCNnmWfhcPUePOm42AXDLhKXrLmMt9euZK2btvmaLKintN0c7j4TmPxJp2fj8fp2WPHsiIUlDjsyoijgKuA98ppfYDlxGNXTkrBVl++TMdfeYXkYlSIgY451bbL6Zv1PX2oe2Lp0oNU5sagD5158ZFBp9t1FvA98byOtAzN5/Q7Pi4HwQ7IWp4TbEwSB3x3i2RELzbGDAycHzJRHNu3aYUodCnlAEQgynmYLfK3NM7OyHTKrpjTxJxq19pm8RmTH7nuQceQV4yYWeJWXMBTb6t55YzLb/Y0LPhBMqIN3wDw1M83phcDYQoO+0MnplMFLwZM+upWeh5y8KF7qK9jOQN8LasddERk4hwFXzuVBnvsyXXkWVRNUfma2rYsZNckUvq9HbZxK+QtNkkG3GspT2YAe5nlWsDBfGSHYCiYjolmgK9O0dEJ3eua0ucCbGSTWsAxdYfVAGhr+Iep20N6r4CrtIXrDKpq8gbWrqoS2rZC3oCwVayOfnBWgAJGqw2si2o6AexUV/vASL3CV7akXJPPrZI7cilnnp9mMVlUDl87bWXGR4/pc87wGOUpwearFILJWGmllGih05hdj0ycTRUxGHjUzMFCjIgjUxfFedrkBqCqZ/7RQX1idNwSxyvf6QFrE2zhAuYHcCxO3xOX7EQkYDKAUQDvk52lMgOksBnyAUenLCCCNvf/KVOMQkdBPrQdinOLaKPzJSmwkJ2TwGQwWolAML8ZGs+ekACoYDoWDGEpBfY4Tr2WBOC6nhsXGyYXcA4csjIS4Ae00qQnV5bALvBdn0IBHyFVDdysgckABcxGuIaHH/1wOv09WAtWayUgFP+CHlRJSFYncudAqxGRKP5BWYaBkaI1XHdq98Y5IZhzgNtcuCnunBkNxkIyIBVqpxblEQBAtPrcxcfnK1KNiMjkGoW335u5DncSOk8ZTYoUYaVu1FplMWLnHZ/iJD6pmNxv5RQAiJgcBrnQOjGsF0eEkWLpbbEYEyNDHYeD7dqwEOzGMjewXfER2rbQkbgermt2UMpZp1QqgFtdW55mGiKNXKEevu+Ws0NtBglg0Wl6jFfYrP5O3VZMjnos5BudTqX4Tqb2EN2DVFlvtDkKdjGKV7aYXqIGGekp3eJVNvCDdpKiEjLE2kGnClbFBzwjMUarl0rNYiLqciAamXvAM8BDXsRMUIkzOlRMoOcO8Gx9D8jge0vEIYZI9QLVXJhrXh419U9f+uZJbpKybETm49Fd88qxuZWboutz6QOe7WAHigR8SQBdWoBngPeTuXfXzUoH/tHjaCk9YmkBngF+F+m/R2PWHJ34rXzA7ZcKipId/m8AngHe7H+niMlgS6X8OKUPuDnQEUsHy+FRygPw/KAnGGxfuTyGu2wATzE4oZMtdlIZmZvKy7Sy0V/qml2+kjJbWpIMdku53b6bys+UF25DZXjvZQh4KkU39Z8b/m/OyUrZLvh3l+l9h8oV8P8KMACinRhg77nALAAAAABJRU5ErkJggg==', //箭头图标
            symbolSize: 20 //图标大小
          },
          lineStyle: {
            normal: {
              width: 1, //尾迹线条宽度
              opacity: 1, //尾迹线条透明度
              curveness: 0.3 //尾迹线条曲直度
            }
          },
          data: convertData(item[1])
        },
        {
          type: "effectScatter",
          coordinateSystem: "geo",
          zlevel: 2,
          rippleEffect: {
            //涟漪特效
            period: 4, //动画时间，值越小速度越快
            brushType: "stroke", //波纹绘制方式 stroke, fill
            scale: 4 //波纹圆环最大限制，值越大波纹越大
          },
          label: {
            normal: {
              show: true,
              position: "right", //显示位置
              offset: [5, 0], //偏移设置
              formatter: function(params) {
                //圆环显示文字
                return params.data.name;
              },
              fontSize: 13
            },
            emphasis: {
              show: true
            }
          },
          symbol: "circle",
          symbolSize: function(val) {
            return 5 + val[2] * 5; //圆环大小
          },
          itemStyle: {
            normal: {
              show: false,
              color: "#f00"
            }
          },
          data: item[1].map(function(dataItem) {
            return {
              name: dataItem[0].name,
              value: chinaGeoCoordMap[dataItem[0].name].concat([
                dataItem[0].value
              ])
            };
          })
        },
        //被攻击点
        {
          type: "scatter",
          coordinateSystem: "geo",
          zlevel: 2,
          rippleEffect: {
            period: 4,
            brushType: "stroke",
            scale: 4
          },
          label: {
            normal: {
              show: true,
              position: "right",
              //offset:[5, 0],
              color: "#0f0",
              formatter: "{b}",
              textStyle: {
                color: "#0f0"
              }
            },
            emphasis: {
              show: true,
              color: "#f60"
            }
          },
          symbol: "pin",
          symbolSize: 50,
          data: [
            {
              name: item[0],
              value: chinaGeoCoordMap[item[0]].concat([10])
            }
          ]
        }
      );
    });

    var option = {
      tooltip: {
        trigger: "item",
        backgroundColor: "rgba(166, 200, 76, 0.82)",
        borderColor: "#FFFFCC",
        showDelay: 0,
        hideDelay: 0,
        enterable: true,
        transitionDuration: 0,
        extraCssText: "z-index:100",
        formatter: function(params, ticket, callback) {
          //根据业务自己拓展要显示的内容
          var res = "";
          var name = params.name;
          var value = params.value[params.seriesIndex + 1];
          res =
            "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
          return res;
        }
      },
      backgroundColor: "#013954",
      visualMap: {
        //图例值控制
        min: 0,
        max: 1,
        calculable: true,
        show: true,
        color: ["#f44336", "#fc9700", "#ffde00", "#ffde00", "#00eaff"],
        textStyle: {
          color: "#fff"
        }
      },
      geo: {
        map: "world",
        zoom: 1.2,
        label: {
          emphasis: {
            show: false
          }
        },
        roam: true, //是否允许缩放
        itemStyle: {
          normal: {
            color: "rgba(51, 69, 89, .5)", //地图背景色
            borderColor: "#516a89", //省市边界线00fcff 516a89
            borderWidth: 1
          },
          emphasis: {
            color: "rgba(37, 43, 61, .5)" //悬浮背景
          }
        }
      },
      series: series
    };

    let myChart = echarts.init(document.getElementById("wrapper"));
    myChart.setOption(option);
    // console.log(echarts);
  },
  computed: {},
  watch: {},
  methods: {}
};
</script>

<style scoped>
</style>
