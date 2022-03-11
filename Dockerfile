from platten/alpine-oracle-jre8-docker
LABEL maintainer = "sen"
ADD cmdb-core/target/cmdb-core-1.2.0-SNAPSHOT.jar   /application/cmdb-core.jar
ADD build/start.sh /scripts/start.sh
RUN chmod +x /scripts/start.sh
CMD ["/bin/sh","-c","/scripts/start.sh"]

