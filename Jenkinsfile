import groovy.json.JsonSlurper

node('we-cmdb') {
    currentBuild.result = "SUCCESS"

    def maven_image = 'maven:3.8.4-openjdk-8-slim'
    def build_name = 'wecmdb-build'
    env.registryName = "124.222.89.4:5001/wecmdb-sen"
    env.current_dir = ''
    def imageName = ''
  
    stage('Checkout'){
        try {
            sh 'git checkout .'
        } catch (err) {

        }
        checkout scm
    }
    stage('Config'){
        env.current_dir =  "${pwd()}"
        if (env.BRANCH_NAME == 'prd') {
            env.PRO_ENV = "pro"
        } else {
           env.PRO_ENV = "Test"
        }
        imageName = "${env.registryName}:${env.PRO_ENV}_${BUILD_NUMBER}"

    }

}
