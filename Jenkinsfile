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
    /*
    stage('Build Package') {
        docker.image(maven_image).inside("--name '${build_name}' -v /data/repository:/usr/src/mymaven/repository   -v '${env.current_dir}'/build/maven_settings.xml:/usr/share/maven/ref/settings-docker.xml  -v '${env.current_dir}':/usr/src/mymaven -w /usr/src/mymaven") {
            sh 'mvn -U clean install -Dmaven.test.skip=true -s /usr/share/maven/ref/settings-docker.xml dependency:resolve'
        }
    }
    
    stage('Build Docker image'){
        def customImage = docker.build(imageName, "--build-arg PRO_ENV=${env.PRO_ENV} .")

        docker.withRegistry("http://${env.registryName}") {
            /* Push the container to the custom Registry */
            customImage.push()
        }
 
    }*/

}
