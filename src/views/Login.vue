<template>
    <div class='login_container'>
        <div class='login_box'>
            <div class='avatar_box'>
                <img src="../assets/logo.png" alt="">
            </div>

            <el-form :model='loginForm'
            :rules='loginFormRules' 
            label-width='0px' class='login_form'
            ref='loginFormRef'>
                <el-form-item prop='username'>
                    <el-input v-model='loginForm.username' prefix-icon='iconfont icon-user'></el-input>
                </el-form-item>

                <el-form-item prop='password'>
                    <el-input v-model="loginForm.password" prefix-icon='iconfont icon-3702mima'
                    type='password'></el-input>
                </el-form-item>
                <!-- 按钮 -->

                <el-form-item class='.btns'>
                    <el-button type="primary" @click='login'>登陆</el-button>
                    <el-button type="info" @click='reset'>重置</el-button>
                </el-form-item>
               
            </el-form>

        


        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            //防抖
            loginclicknum:true,

            // 登陆表单的数据绑定对象
            loginForm:{
                username:'',
                password:'',
            },
            // 表单验证规则对象
            loginFormRules:{
                username:[
                     { required: true, message: '请输入账号/名称', trigger: 'blur' },
                     { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' },
                ],
                password:[
                    { required: true, message: '请输入密码', trigger: 'blur' },
                     { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' },
                ]
            }

        }
    },
    methods:{
        // 重置登陆，重置表单
        reset(){
            this.$refs.loginFormRef.resetFields();
        },
        login(){
            if(this.loginclicknum){
                this.loginclicknum = false;
                this.$refs.loginFormRef.validate(async valid =>{
                if(!valid) return;
                const {data:res} = await this.$http.post('login',this.loginForm);
                console.log(res)
                if(res.meta.status !== 200) return this.$message.error('登陆失败 '+ res.meta.msg)
                this.$message.success('登陆成功')
                // 保存登陆成功生成的路由 设置token
                window.sessionStorage.setItem('token',res.data.token)
                // 通过编程式导航跳转到后台主页，路由地址是/home
                this.$router.push('/home')
            })
                setTimeout(()=>{
                    this.loginclicknum = true;
                },1500)
                
            }
        },


    }
}
</script>

<style lang='less' scoped>
    .login_container{
        background-color:#2b4b6b;
        height:100%;
    }
    .login_box{
        width:450px;
        height:300px;
        background-color: #fff;
        border-radius:4px;
        position:absolute;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
        
    }
    .avatar_box{
        height:130px;
        width:130px;
        border:1px solid silver;
        border-radius:50%;
        padding:10px;
        box-shadow:0 0 10px #ddd;
        position:absolute;
        left:50%;
        transform:translate(-50%,-50%);
        background-color: #fff;
        img {
            width:100%;
            height:100%;
            border-radius:50%;
            background-color: #eee;
        }
    }

    .login_form{
        position:absolute;
        bottom:0;
        width:100%;
        padding:0 20px;
        box-sizing:border-box;
    }

    .btns{
        display:flex;
        justify-content:flex-end;
    }
</style>