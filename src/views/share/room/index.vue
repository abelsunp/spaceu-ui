<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="会议室可容纳人数" prop="roomScale">
        <el-input
          v-model="queryParams.roomScale"
          placeholder="请输入会议室可容纳人数"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="中文房间名" prop="roomName">
        <el-input
          v-model="queryParams.roomName"
          placeholder="请输入中文房间名"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="开放时间开始" prop="freeTimeStart">
        <el-date-picker clearable size="small" style="width: 200px"
          v-model="queryParams.freeTimeStart"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="选择开放时间开始">
        </el-date-picker>
      </el-form-item>
      <el-form-item label=" 开放时间结束" prop="freeTimeEnd">
        <el-date-picker clearable size="small" style="width: 200px"
          v-model="queryParams.freeTimeEnd"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="选择 开放时间结束">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="地址简称" prop="address">
        <el-input
          v-model="queryParams.address"
          placeholder="请输入地址简称"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="详细地址" prop="addressDetail">
        <el-input
          v-model="queryParams.addressDetail"
          placeholder="请输入详细地址"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="经度" prop="longitude">
        <el-input
          v-model="queryParams.longitude"
          placeholder="请输入经度"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="纬度" prop="latitude">
        <el-input
          v-model="queryParams.latitude"
          placeholder="请输入纬度"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="进入条件" prop="inRule">
        <el-input
          v-model="queryParams.inRule"
          placeholder="请输入进入条件"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="取消规则" prop="cancelRule">
        <el-input
          v-model="queryParams.cancelRule"
          placeholder="请输入取消规则"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="0 不收费 1 收费" prop="charge">
        <el-input
          v-model="queryParams.charge"
          placeholder="请输入0 不收费 1 收费"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="价格 /人民币" prop="price">
        <el-input
          v-model="queryParams.price"
          placeholder="请输入价格 /人民币"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="最小单位时间 分钟" prop="minUnitTime">
        <el-input
          v-model="queryParams.minUnitTime"
          placeholder="请输入最小单位时间 分钟"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="部门id" prop="deptId">
        <el-input
          v-model="queryParams.deptId"
          placeholder="请输入部门id"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="部门状态" prop="status">
        <el-select v-model="queryParams.status" placeholder="请选择部门状态" clearable size="small">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="cyan" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="primary"
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['share:room:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['share:room:edit']"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['share:room:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['share:room:export']"
        >导出</el-button>
      </el-col>
	  <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="roomList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="id" align="center" prop="id" />
      <el-table-column label="会议室可容纳人数" align="center" prop="roomScale" />
      <el-table-column label="中文房间名" align="center" prop="roomName" />
      <el-table-column label="开放时间开始" align="center" prop="freeTimeStart" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.freeTimeStart, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label=" 开放时间结束" align="center" prop="freeTimeEnd" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.freeTimeEnd, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="地址简称" align="center" prop="address" />
      <el-table-column label="详细地址" align="center" prop="addressDetail" />
      <el-table-column label="经度" align="center" prop="longitude" />
      <el-table-column label="纬度" align="center" prop="latitude" />
      <el-table-column label="进入条件" align="center" prop="inRule" />
      <el-table-column label="取消规则" align="center" prop="cancelRule" />
      <el-table-column label="0 不收费 1 收费" align="center" prop="charge" />
      <el-table-column label="价格 /人民币" align="center" prop="price" />
      <el-table-column label="最小单位时间 分钟" align="center" prop="minUnitTime" />
      <el-table-column label="部门id" align="center" prop="deptId" />
      <el-table-column label="部门状态" align="center" prop="status" />
      <el-table-column label="备注 会议说明" align="center" prop="remark" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['share:room:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['share:room:remove']"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    
    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />

    <!-- 添加或修改共享会议室对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="会议室可容纳人数" prop="roomScale">
          <el-input v-model="form.roomScale" placeholder="请输入会议室可容纳人数" />
        </el-form-item>
        <el-form-item label="中文房间名" prop="roomName">
          <el-input v-model="form.roomName" placeholder="请输入中文房间名" />
        </el-form-item>
        <el-form-item label="开放时间开始" prop="freeTimeStart">
          <el-date-picker clearable size="small" style="width: 200px"
            v-model="form.freeTimeStart"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择开放时间开始">
          </el-date-picker>
        </el-form-item>
        <el-form-item label=" 开放时间结束" prop="freeTimeEnd">
          <el-date-picker clearable size="small" style="width: 200px"
            v-model="form.freeTimeEnd"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择 开放时间结束">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="地址简称" prop="address">
          <el-input v-model="form.address" placeholder="请输入地址简称" />
        </el-form-item>
        <el-form-item label="详细地址" prop="addressDetail">
          <el-input v-model="form.addressDetail" placeholder="请输入详细地址" />
        </el-form-item>
        <el-form-item label="经度" prop="longitude">
          <el-input v-model="form.longitude" placeholder="请输入经度" />
        </el-form-item>
        <el-form-item label="纬度" prop="latitude">
          <el-input v-model="form.latitude" placeholder="请输入纬度" />
        </el-form-item>
        <el-form-item label="进入条件" prop="inRule">
          <el-input v-model="form.inRule" placeholder="请输入进入条件" />
        </el-form-item>
        <el-form-item label="取消规则" prop="cancelRule">
          <el-input v-model="form.cancelRule" placeholder="请输入取消规则" />
        </el-form-item>
        <el-form-item label="0 不收费 1 收费" prop="charge">
          <el-input v-model="form.charge" placeholder="请输入0 不收费 1 收费" />
        </el-form-item>
        <el-form-item label="价格 /人民币" prop="price">
          <el-input v-model="form.price" placeholder="请输入价格 /人民币" />
        </el-form-item>
        <el-form-item label="最小单位时间 分钟" prop="minUnitTime">
          <el-input v-model="form.minUnitTime" placeholder="请输入最小单位时间 分钟" />
        </el-form-item>
        <el-form-item label="部门id" prop="deptId">
          <el-input v-model="form.deptId" placeholder="请输入部门id" />
        </el-form-item>
        <el-form-item label="部门状态">
          <el-radio-group v-model="form.status">
            <el-radio label="1">请选择字典生成</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="删除标志" prop="delFlag">
          <el-input v-model="form.delFlag" placeholder="请输入删除标志" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { listRoom, getRoom, delRoom, addRoom, updateRoom, exportRoom } from "@/api/share/room";

export default {
  name: "Room",
  data() {
    return {
      // 遮罩层
      loading: true,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // 共享会议室表格数据
      roomList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        roomScale: null,
        roomName: null,
        freeTimeStart: null,
        freeTimeEnd: null,
        address: null,
        addressDetail: null,
        longitude: null,
        latitude: null,
        inRule: null,
        cancelRule: null,
        charge: null,
        price: null,
        minUnitTime: null,
        deptId: null,
        status: null,
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
        deptId: [
          { required: true, message: "部门id不能为空", trigger: "blur" }
        ],
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    /** 查询共享会议室列表 */
    getList() {
      this.loading = true;
      listRoom(this.queryParams).then(response => {
        this.roomList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form = {
        id: null,
        roomScale: null,
        roomName: null,
        freeTimeStart: null,
        freeTimeEnd: null,
        address: null,
        addressDetail: null,
        longitude: null,
        latitude: null,
        inRule: null,
        cancelRule: null,
        charge: null,
        price: null,
        minUnitTime: null,
        deptId: null,
        status: "0",
        delFlag: null,
        remark: null,
        createBy: null,
        createTime: null,
        updateBy: null,
        updateTime: null
      };
      this.resetForm("form");
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.resetForm("queryForm");
      this.handleQuery();
    },
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.id)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加共享会议室";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getRoom(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改共享会议室";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateRoom(this.form).then(response => {
              if (response.code === 200) {
                this.msgSuccess("修改成功");
                this.open = false;
                this.getList();
              }
            });
          } else {
            addRoom(this.form).then(response => {
              if (response.code === 200) {
                this.msgSuccess("新增成功");
                this.open = false;
                this.getList();
              }
            });
          }
        }
      });
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const ids = row.id || this.ids;
      this.$confirm('是否确认删除共享会议室编号为"' + ids + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delRoom(ids);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        }).catch(function() {});
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$confirm('是否确认导出所有共享会议室数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return exportRoom(queryParams);
        }).then(response => {
          this.download(response.msg);
        }).catch(function() {});
    }
  }
};
</script>
