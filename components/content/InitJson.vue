<script setup>
import { ref } from 'vue'
import { read, utils } from 'xlsx'

const uploadExchange = (file,fileList)=>{
    let files = {0: file}
    readExcel1(files,'exchange')
}
const uploadDEX = (file,fileList)=>{
    let files = {0: file}
    readExcel1(files,'dex')
}

// 表格导入
const readExcel1 = (files,type)=> {
    // 此处判断不严谨，思路只是根据传入的参数校验数据的完整性，可根据自己需求修改
    // 如果没有文件名
    if(files.length <= 0){
        return;
    }
    if(!/\.(xls|xlsx)$/.test(files[0].name.toLowerCase())){
        this.$Message.error('上传格式不正确，请上传xls或者xlsx格式');
        return;
    }

    const fileReader = new FileReader();
    fileReader.onload = (ev) => {
      try {
        const data = ev.target.result;
        const workbook = read(data, {
            type: 'binary'
        })
        // 取第一张表
        const wsname = workbook.SheetNames[0]
        // 生成json表格内容
        const ws = utils.sheet_to_json(workbook.Sheets[wsname])
        // 后续为自己对ws数据的处理
        console.log('ws',ws);
        let lis
        if(type == 'exchange') {
          lis = ws.map((e)=>{
          return {
              Name: e.Exchange,
              Score: e.Score, 
              Coins: e['#_Coins'], 
              Markets: e['#_Markets'], 
              Icon: e['Exchange.2_SRC'], 
              Liquidity: e['Avg._Liquidity'], 
              WeeklyVisits: e['Weekly_Visits'],
              FiatSupported1: e['Fiat_Supported.1'],
              FiatSupported2: e['Fiat_Supported.2'],
            }
          })
        }
        if(type == 'dex') {
          lis = ws.map((e)=>{
          return {
              Name: e.Name,
              Type: e.Type, 
              Launched: e.Launched, 
              Markets: e['No._Markets'], 
              MktShare: e['%_Mkt_Share'], 
              Icon: e['Name.2_SRC'], 
            }
          })
        }

        console.log('lis',lis);
      } catch (e) {
          return false;
      }
    };
    fileReader.readAsBinaryString(files[0]);
}

</script>
<template>
  <div class="iiemo_skills">
    <el-upload
      ref="upload"
      action=""
      :before-upload="uploadExchange"
      :show-file-list="false"
      accept=".xlsx,.xls"
      style="width: 100px; display: inline-flex;"
    >
      <el-button
        size="mini"
        type="text"
      >
        导入交易所排行
      </el-button>
    </el-upload>
    <br/>
    <el-upload
      ref="upload"
      action=""
      :before-upload="uploadDEX"
      :show-file-list="false"
      accept=".xlsx,.xls"
      style="width: 100px; display: inline-flex;"
    >
      <el-button
        size="mini"
        type="text"
      >
        导入DEX排行
      </el-button>
    </el-upload>

  </div>
</template>

