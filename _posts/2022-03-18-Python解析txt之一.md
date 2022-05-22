---
layout: post	
title: "Python解析txt之一"	
date: 2022-03-18	
description: "数据分析"	
tag: Python	
---

---

### 代码

纯记录，以备日后查看。

```python
# -*- coding: utf-8 -*-
"""
统计训练样本数据中的类别和类别样本数目
"""

import matplotlib.pyplot as plt
plt.style.use("ggplot")

import re

from pylab import mpl
mpl.rcParams['font.sans-serif'] = ['SimHei']
mpl.rcParams['axes.unicode_minus'] = False

def get_cls_dict(filename:str):
    cls_dict = {}
    with open(filename, 'r') as file_to_read:
        while True:
            a_line = file_to_read.readline() # 整行读取数据
            if not a_line: # 判断是否到文本末尾
                break
            # 正则表达式，找出每行双引号之间的类别名字
            cls_name = re.findall(r"\"(.+?)\"", a_line)
            if len(cls_name) != 0:
                for i in range(len(cls_name)):
                    if cls_dict.__contains__(cls_name[i]):
                        cls_dict[cls_name[0]] += 1
                    else:
                        cls_dict[cls_name[0]] = 1
                        
    file_to_read.close()
        
    return cls_dict

def plot_dict(title_name:str, cls_dict:dict):
    x = list(cls_dict.keys())
    y = list(cls_dict.values())
    
    fig, ax = plt.subplots(figsize=(20, 7))
    ax.bar(x=x, height=y)
    ax.set_title(title_name, fontsize=15)
    
    for a, b in zip(x, y):
        plt.text(a, b+0.05, '%.0f'%b, ha='center', 
                 va='bottom',fontsize=11)
    
    plt.savefig(title_name + ".png", dpi=300)
    
    return


if __name__ == '__main__':
    filename = 'DetectTrainData_Bottom.txt'
    bottom_cls_dict = get_cls_dict(filename)
    filename = 'DetectTrainData_Side.txt'
    side_cls_dict = get_cls_dict(filename)
    plot_dict("底面训练样本类别分布", bottom_cls_dict)
    plot_dict("侧面训练样本类别分布", side_cls_dict)
```

代码中的两个测试数据请点击：<a href="/downloads/DetectTrainData.7z" target="_blank">DetectTrainData.7z</a>
<br><br>
