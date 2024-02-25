FROM amazonlinux:2

# Install Python, pip, and zip
RUN yum install -y python37 python3-pip zip && \
    yum clean all

# Upgrade pip and install virtualenv
RUN python3.7 -m pip install --upgrade pip virtualenv

# Create a virtual environment
RUN python3.7 -m venv /opt/venv

# Activate the virtual environment and install Pydantic
# Here's the new line to add Pydantic
RUN /opt/venv/bin/pip install pydantic

# Install other dependencies using the virtual environment
COPY ./requirements.txt .
RUN /opt/venv/bin/pip install -r requirements.txt -t ./python

# Zip for deployment
RUN zip -r layer.zip ./python/

# Set the entry point to bash
ENTRYPOINT ["/bin/bash"]
