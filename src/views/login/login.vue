<template>
  <div>
    <div class="hear">
      <div class="logo"><router-link to="/"></router-link></div>
    </div>
    <div class="login_banner_panel">
      <div class="layout_panel">
        <div class="login-wrap">
          <div class="login-tabs">
            <div :class="[activa ? 'activa' : '']" @click="lqh">账号登录</div>
            <span></span>
            <div :class="[activa ? '' : 'activa']" @click="rqh">扫码登录</div>
          </div>
          <div :class="['login-main1', display ? '' : 'display']">
            <input
              type="text"
              placeholder="邮箱/手机号码/小米ID"
              v-model="zh"
            />
            <input type="password" placeholder="密码" v-model="mm" />
            <div class="ts">{{ ts }}</div>
            <div class="login-btn" @click="dl">
              登录
            </div>
            <div class="sms_link">手机短信登录/注册</div>
            <div class="reverse">
              <div>立即注册</div>
              <span></span>
              <div>忘记密码？</div>
            </div>
            <div class="other_login_type">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
            </div>
          </div>
          <div :class="['main2', display ? 'display' : '']">333</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activa: true,
      display: true,
      zh: "",
      mm: "",
      ts: "",
    };
  },
 
  methods: {
    lqh() {
      this.display = true;
      this.activa = true;
    },
    rqh() {
      this.display = false;
      this.activa = false;
    },
    dl() {
      if (this.zh == this.$store.state.zh && this.mm == this.$store.state.mm) {
        this.$router.push("/");
      } else {
        this.ts = "账号或密码错误";
      }
    },
  },
};
</script>

<style lang="less" scoped>
.hear {
  width: 1130px;
  margin: 0 auto;
  .logo {
    width: 200px;
    height: 98px;
    background-image: url(../../assets/img/login/mistore_logo.png);
    cursor: pointer;
    a{
      display: inline-block;
      width: 100%;
      height: 100%;
    }
  }
}
.login_banner_panel {
  height: 588px;
  background-image: url(../../assets/img/login/bg.jpg);
  background-repeat: no-repeat;
  background-position: center;
  .layout_panel {
    width: 1130px;
    height: 100%;
    margin: 0 auto;
    position: relative;
    .login-wrap {
      width: 410px;
      height: 550px;
      position: absolute;
      background-color: #fff;
      top: 38px;
      right: 0;
      .login-tabs {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 27px 0 24px;
        font-size: 24px;
        div {
          cursor: pointer;
          &:hover {
            color: #f56600;
          }
        }
        .activa {
          color: #f56600;
        }
        span {
          width: 2px;
          height: 29px;
          margin: 0 20px;
          background-color: #e0e0e0;
        }
      }
      .login-main1 {
        display: flex;
        flex-direction: column;
        align-items: center;

        input {
          width: 306px;
          height: 22px;
          line-height: 22px;
          padding: 13px 16px 13px 14px;
          background: none;
          border: none;
          outline: none;
          border: 1px solid #e0e0e0;
          & + input {
            margin-top: 10px;
          }
        }
        .ts {
          width: 338px;
          //   height: 20px;
          line-height: 20px;
          font-size: 12px;
          margin: 10px 0;
        }
        .login-btn {
          width: 338px;
          height: 50px;
          //   margin-top: 20px;
          color: #fff;
          text-align: center;
          line-height: 50px;
          cursor: pointer;
          background-color: #f56600;
        }
        .sms_link {
          margin-top: 10px;
          margin-bottom: 30px;
          color: #ff6700;
          font-size: 12px;
          cursor: pointer;
        }
        .reverse {
          display: flex;
          align-items: center;
          font-size: 12px;
          color: #ccc;
          div {
            cursor: pointer;
            &:hover {
              color: #ff6700;
            }
          }
          span {
            width: 2px;
            height: 16px;
            margin: 0 10px;
            background-color: #ccc;
          }
        }
        .other_login_type {
          display: flex;
          margin-top: 140px;
          div + div {
            margin-left: 20px;
          }
        }
      }
      .display {
        display: none;
      }
    }
  }
}
</style>
