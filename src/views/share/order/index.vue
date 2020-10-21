<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="会议名称" prop="meetingName">
        <el-input
          v-model="queryParams.meetingName"
          placeholder="请输入会议名称"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="会议等级0面试1例会2高级3紧急" prop="meetingLevel">
        <el-input
          v-model="queryParams.meetingLevel"
          placeholder="请输入会议等级0面试1例会2高级3紧急"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="全局meeting" prop="meetingId">
        <el-input
          v-model="queryParams.meetingId"
          placeholder="请输入全局meeting"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="会议室id" prop="roomId">
        <el-input
          v-model="queryParams.roomId"
          placeholder="请输入会议室id"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="会议预定者" prop="userId">
        <el-input
          v-model="queryParams.userId"
          placeholder="请输入会议预定者"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="会议预定者" prop="userName">
        <el-input
          v-model="queryParams.userName"
          placeholder="请输入会议预定者"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="会议预定日期" prop="bookingDate">
        <el-date-picker clearable size="small" style="width: 200px"
          v-model="queryParams.bookingDate"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="选择会议预定日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="定会议室起始时间" prop="bookingStartTime">
        <el-date-picker clearable size="small" style="width: 200px"
          v-model="queryParams.bookingStartTime"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="选择定会议室起始时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="定会议室结束时间" prop="bookingEndTime">
        <el-date-picker clearable size="small" style="width: 200px"
          v-model="queryParams.bookingEndTime"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="选择定会议室结束时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="会议时长" prop="requiredtime">
        <el-input
          v-model="queryParams.requiredtime"
          placeholder="请输入会议时长"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="预定的部门名" prop="departmentName">
        <el-input
          v-model="queryParams.departmentName"
          placeholder="请输入预定的部门名"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="会议费用" prop="price">
        <el-input
          v-model="queryParams.price"
          placeholder="请输入会议费用"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="支付订单号" prop="payId">
        <el-input
          v-model="queryParams.payId"
          placeholder="请输入支付订单号"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="支付渠道" prop="payChannel">
        <el-input
          v-model="queryParams.payChannel"
          placeholder="请输入支付渠道"
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
          v-hasPermi="['share:order:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['share:order:edit']"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['share:order:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['share:order:export']"
        >导出</el-button>
      </el-col>
	  <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="orderList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="id" align="center" prop="id" />
      <el-table-column label="会议名称" align="center" prop="meetingName" />
      <el-table-column label="会议等级0面试1例会2高级3紧急" align="center" prop="meetingLevel" />
      <el-table-column label="全局meeting" align="center" prop="meetingId" />
      <el-table-column label="会议室id" align="center" prop="roomId" />
      <el-table-column label="会议预定者" align="center" prop="userId" />
      <el-table-column label="会议预定者" align="center" prop="userName" />
      <el-table-column label="会议预定日期" align="center" prop="bookingDate" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.bookingDate, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="定会议室起始时间" align="center" prop="bookingStartTime" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.bookingStartTime, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="定会议室结束时间" align="center" prop="bookingEndTime" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.bookingEndTime, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="会议时长" align="center" prop="requiredtime" />
      <el-table-column label="预定的部门名" align="center" prop="departmentName" />
      <el-table-column label="会议费用" align="center" prop="price" />
      <el-table-column label="支付订单号" align="center" prop="payId" />
      <el-table-column label="支付渠道" align="center" prop="payChannel" />
      <el-table-column label="部门状态" align="center" prop="status" />
      <el-table-column label="备注" align="center" prop="remark" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['share:order:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['share:order:remove']"
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

    <!-- 添加或修改会议室预定对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="会议名称" prop="meetingName">
          <el-input v-model="form.meetingName" placeholder="请输入会议名称" />
        </el-form-item>
        <el-form-item label="会议等级0面试1例会2高级3紧急" prop="meetingLevel">
          <el-input v-model="form.meetingLevel" placeholder="请输入会议等级0面试1例会2高级3紧急" />
        </el-form-item>
        <el-form-item label="全局meeting" prop="meetingId">
          <el-input v-model="form.meetingId" placeholder="请输入全局meeting" />
        </el-form-item>
        <el-form-item label="会议室id" prop="roomId">
          <el-input v-model="form.roomId" placeholder="请输入会议室id" />
        </el-form-item>
        <el-form-item label="会议预定者" prop="userId">
          <el-input v-model="form.userId" placeholder="请输入会议预定者" />
        </el-form-item>
        <el-form-item label="会议预定者" prop="userName">
          <el-input v-model="form.userName" placeholder="请输入会议预定者" />
        </el-form-item>
        <el-form-item label="会议预定日期" prop="bookingDate">
          <el-date-picker clearable size="small" style="width: 200px"
            v-model="form.bookingDate"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择会议预定日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="定会议室起始时间" prop="bookingStartTime">
          <el-date-picker clearable size="small" style="width: 200px"
            v-model="form.bookingStartTime"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择定会议室起始时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="定会议室结束时间" prop="bookingEndTime">
          <el-date-picker clearable size="small" style="width: 200px"
            v-model="form.bookingEndTime"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择定会议室结束时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="会议时长" prop="requiredtime">
          <el-input v-model="form.requiredtime" placeholder="请输入会议时长" />
        </el-form-item>
        <el-form-item label="预定的部门名" prop="departmentName">
          <el-input v-model="form.departmentName" placeholder="请输入预定的部门名" />
        </el-form-item>
        <el-form-item label="会议费用" prop="price">
          <el-input v-model="form.price" placeholder="请输入会议费用" />
        </el-form-item>
        <el-form-item label="支付订单号" prop="payId">
          <el-input v-model="form.payId" placeholder="请输入支付订单号" />
        </el-form-item>
        <el-form-item label="支付渠道" prop="payChannel">
          <el-input v-model="form.payChannel" placeholder="请输入支付渠道" />
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
import { listOrder, getOrder, delOrder, addOrder, updateOrder, exportOrder } from "@/api/share/order";

export default {
  name: "Order",
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
      // 会议室预定表格数据
      orderList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        meetingName: null,
        meetingLevel: null,
        meetingId: null,
        roomId: null,
        userId: null,
        userName: null,
        bookingDate: null,
        bookingStartTime: null,
        bookingEndTime: null,
        requiredtime: null,
        departmentName: null,
        price: null,
        payId: null,
        payChannel: null,
        status: null,
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    /** 查询会议室预定列表 */
    getList() {
      this.loading = true;
      listOrder(this.queryParams).then(response => {
        this.orderList = response.rows;
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
        meetingName: null,
        meetingLevel: null,
        meetingId: null,
        roomId: null,
        userId: null,
        userName: null,
        bookingDate: null,
        bookingStartTime: null,
        bookingEndTime: null,
        requiredtime: null,
        departmentName: null,
        price: null,
        payId: null,
        payChannel: null,
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
      this.title = "添加会议室预定";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getOrder(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改会议室预定";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateOrder(this.form).then(response => {
              if (response.code === 200) {
                this.msgSuccess("修改成功");
                this.open = false;
                this.getList();
              }
            });
          } else {
            addOrder(this.form).then(response => {
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
      this.$confirm('是否确认删除会议室预定编号为"' + ids + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delOrder(ids);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        }).catch(function() {});
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$confirm('是否确认导出所有会议室预定数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return exportOrder(queryParams);
        }).then(response => {
          this.download(response.msg);
        }).catch(function() {});
    }
  }
};
</script>
