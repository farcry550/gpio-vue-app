from flask import Flask # type: ignore
from flask import Response # type: ignore
from flask import request # type: ignore
import RPi.GPIO as GPIO # type: ignore

#GPIO Basic initialization
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

app = Flask(__name__)

def response(data):
  res = Response(data)
  res.mimetype = 'application/json'
  res.headers.add('Access-Control-Allow-Origin', '*')
  return res

def write_response(success,msg):
  return response(f'{{\"success\":{success},\"message\":\"{msg}\"}}')

def read_response(pin,value):
  return response(f'{{\"pin\":\"{pin}\",\"value\":{value}}}')

@app.route('/write',methods=['POST'])
def write_to_pin():
  data = request.get_json()
  requested_pin = int(data.get('pin'))
  requested_value = int(data.get('value'))
  GPIO.setup(requested_pin,GPIO.OUT)
  GPIO.output(requested_pin,requested_value)
  return write_response('true',f'Value {requested_value} written to pin {requested_pin}')

@app.route('/read/<pin>')
def read_pin(pin):
  GPIO.setup(int(pin),GPIO.OUT)
  value = GPIO.input(int(pin))
  return read_response(pin,value)

if __name__ == '__main__':
  app.run()
